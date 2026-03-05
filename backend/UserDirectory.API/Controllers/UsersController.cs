using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using UserDirectory.API.Models;
using UserDirectory.API.Services;

namespace UserDirectory.API.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository,
            IMapper mapper)
        {
            _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
        {
            var usersEntity = await _userRepository.GetUsersAsync();
            return Ok(_mapper.Map<IEnumerable<UserDto>>(usersEntity));
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<ActionResult<UserDto>> GetUser(int id)
        {
            var userEntity = await _userRepository.GetUserByIdAsync(id);

            if (userEntity is null)
                return NotFound();

            return Ok(_mapper.Map<UserDto>(userEntity));
        }

        [HttpPost]
        public async Task<ActionResult<UserDto>> CreateUser(UserForCreationDto user)
        {
            var finalUser = _mapper.Map<Entities.User>(user);
            _userRepository.AddUser(finalUser);

            await _userRepository.SaveChangesAsync();

            var createdUserDto = _mapper.Map<UserDto>(finalUser);

            return CreatedAtRoute("GetUser",
                new { id = createdUserDto.Id }, createdUserDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUser(int id, UserForUpdateDto user)
        {
            var userEntity = await _userRepository.GetUserByIdAsync(id);

            if (userEntity is null)
                return NotFound();

            _mapper.Map(user, userEntity);
            await _userRepository.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var userToDelete = await _userRepository.GetUserByIdAsync(id);

            if (userToDelete is null)
                return NotFound();

            _userRepository.DeleteUser(userToDelete);
            await _userRepository.SaveChangesAsync();       
            
            return NoContent();
        }
    }
}
