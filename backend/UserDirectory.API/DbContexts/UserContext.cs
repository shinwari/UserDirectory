using Microsoft.EntityFrameworkCore;
using UserDirectory.API.Entities;
using UserDirectory.API.Models;

namespace UserDirectory.API.DbContexts
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public UserContext(DbContextOptions<UserContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasData(
                    new User()
                    {
                        Id = 1,
                        Name = "John Doe",
                        Age = 20,
                        City = "Sydney",
                        State = "NSW",
                        PinCode = "1111",
                    },
                    new User()
                    {
                        Id = 2,
                        Name = "Jane Doe",
                        Age = 35,
                        City = "Melbourne",
                        State = "Victoria",
                        PinCode = "2222",
                    },
                    new User()
                    {
                        Id = 3,
                        Name = "Tony Smith",
                        Age = 29,
                        City = "Adelaide",
                        State = "South Australia",
                        PinCode = "3333",
                    }
                );

            base.OnModelCreating(modelBuilder);
        }
    }
}
