using System.ComponentModel.DataAnnotations;

namespace UserDirectory.API.Models
{
    public class UserForUpdateDto
    {
        [Required]
        [MinLength(2)]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [Range(0, 120)]
        public int Age { get; set; }

        [Required]
        public string City { get; set; } = string.Empty;

        [Required]
        public string State { get; set; } = string.Empty;

        [Required]
        [MinLength(4)]
        [MaxLength(10)]
        public string PinCode { get; set; } = string.Empty;
    }
}
