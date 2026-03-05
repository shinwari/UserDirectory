using Microsoft.EntityFrameworkCore;
using System.IO;
using UserDirectory.API.DbContexts;
using UserDirectory.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddProblemDetails();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Check for the database directory, create if doesn't exist
string dbFilePath = builder.Configuration["Database:FilePath"];
Directory.CreateDirectory(Path.GetDirectoryName(dbFilePath));
var connectionString = $"Data Source={dbFilePath}";

// Register DB context
builder.Services.AddDbContext<UserContext>(dbContextOptions 
        => dbContextOptions.UseSqlite(connectionString));

builder.Services.AddScoped<IUserRepository, UserRepository>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

app.UseExceptionHandler();

// Make sure database file exists. Also, apply migration (for initial data)
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<UserContext>();
    db.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
