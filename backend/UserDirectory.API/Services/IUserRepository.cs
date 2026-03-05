using UserDirectory.API.Entities;

namespace UserDirectory.API.Services
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetUsersAsync();
        Task<User?> GetUserByIdAsync(int userId);
        void AddUser(User user);
        void DeleteUser(User user);
        Task SaveChangesAsync();
    }
}
