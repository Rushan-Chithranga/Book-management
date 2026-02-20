using Backend.Models;

namespace Backend.Services.Auth;

public interface IJwtTokenService
{
    string CreateToken(User user);
}
