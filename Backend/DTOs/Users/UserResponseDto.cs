namespace Backend.Dtos.Users;

public class UserResponseDto
{
    public int Id { get; set; }
    public string FullName { get; set; } = default!;
    public string Email { get; set; } = default!;
}
