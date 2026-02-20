using Backend.Dtos.Books;

namespace Backend.Services.Books;

public interface IBookService
{
    Task<List<BookResponseDto>> GetAllAsync();
    Task<BookResponseDto?> GetByIdAsync(int id);
    Task<BookResponseDto> CreateAsync(BookCreateDto dto, int? createdByUserId);
    Task<bool> UpdateAsync(int id, BookUpdateDto dto);
    Task<bool> DeleteAsync(int id);
}
