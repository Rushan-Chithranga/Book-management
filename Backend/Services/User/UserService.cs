using Backend.Data;
using Backend.Dtos.Users;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Users;

public class UserService : IUserService
{
    private readonly AppDbContext _db;

    public UserService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<UserResponseDto?> GetByIdAsync(int userId)
    {
        return await _db.Users
            .Where(u => u.Id == userId)
            .Select(u => new UserResponseDto
            {
                Id = u.Id,
                FullName = u.FullName,
                Email = u.Email
            })
            .FirstOrDefaultAsync();
    }
}
