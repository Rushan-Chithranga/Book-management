using Backend.Models;

namespace Backend.Services.Auth;

public interface IJwtTokenService
{
    (string token, DateTime expiresAtUtc) CreateToken(User user);
}
