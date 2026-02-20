using Backend.Data;
using Backend.Dtos.Books;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Books;

public class BookService : IBookService
{
    private readonly AppDbContext _db;

    public BookService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<List<BookResponseDto>> GetAllAsync()
    {
        return await _db.Books
            .OrderByDescending(b => b.Id)
            .Select(b => new BookResponseDto
            {
                Id = b.Id,
                Title = b.Title,
                Author = b.Author,
                Isbn = b.Isbn,
                PublicationDate = b.PublicationDate
            })
            .ToListAsync();
    }

    public async Task<BookResponseDto?> GetByIdAsync(int id)
    {
        return await _db.Books
            .Where(b => b.Id == id)
            .Select(b => new BookResponseDto
            {
                Id = b.Id,
                Title = b.Title,
                Author = b.Author,
                Isbn = b.Isbn,
                PublicationDate = b.PublicationDate
            })
            .FirstOrDefaultAsync();
    }

    public async Task<BookResponseDto> CreateAsync(BookCreateDto dto, int? createdByUserId)
    {
        var existsIsbn = await _db.Books.AnyAsync(b => b.Isbn == dto.Isbn);
        if (existsIsbn) throw new Exception("ISBN already exists.");

        var book = new Book
        {
            Title = dto.Title.Trim(),
            Author = dto.Author.Trim(),
            Isbn = dto.Isbn.Trim(),
            PublicationDate = dto.PublicationDate,
            CreatedByUserId = createdByUserId
        };

        _db.Books.Add(book);
        await _db.SaveChangesAsync();

        return new BookResponseDto
        {
            Id = book.Id,
            Title = book.Title,
            Author = book.Author,
            Isbn = book.Isbn,
            PublicationDate = book.PublicationDate
        };
    }

    public async Task<bool> UpdateAsync(int id, BookUpdateDto dto)
    {
        var book = await _db.Books.FirstOrDefaultAsync(b => b.Id == id);
        if (book == null) return false;

        var isbnConflict = await _db.Books.AnyAsync(b => b.Isbn == dto.Isbn && b.Id != id);
        if (isbnConflict) throw new Exception("ISBN already exists for another book.");

        book.Title = dto.Title.Trim();
        book.Author = dto.Author.Trim();
        book.Isbn = dto.Isbn.Trim();
        book.PublicationDate = dto.PublicationDate;

        await _db.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var book = await _db.Books.FirstOrDefaultAsync(b => b.Id == id);
        if (book == null) return false;

        _db.Books.Remove(book);
        await _db.SaveChangesAsync();
        return true;
    }
}
