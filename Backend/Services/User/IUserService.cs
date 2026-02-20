using Backend.Dtos.Users;

namespace Backend.Services.Users;

public interface IUserService
{
    Task<UserResponseDto?> GetByIdAsync(int userId);
}
