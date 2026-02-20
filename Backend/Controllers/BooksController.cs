using Backend.Dtos.Books;
using Backend.Services.Books;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class BooksController : ControllerBase
{
    private readonly IBookService _books;

    public BooksController(IBookService books)
    {
        _books = books;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var list = await _books.GetAllAsync();
        return Ok(list);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var book = await _books.GetByIdAsync(id);
        if (book == null) return NotFound(new { message = "Book not found." });
        return Ok(book);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] BookCreateDto dto)
    {
        try
        {
            int? userId = GetUserId();
            var created = await _books.CreateAsync(dto, userId);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] BookUpdateDto dto)
    {
        try
        {
            var ok = await _books.UpdateAsync(id, dto);
            if (!ok) return NotFound(new { message = "Book not found." });
            return Ok(new { message = "Updated successfully." });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var ok = await _books.DeleteAsync(id);
        if (!ok) return NotFound(new { message = "Book not found." });
        return Ok(new { message = "Deleted successfully." });
    }

    private int? GetUserId()
    {
        var sub = User.FindFirstValue(ClaimTypes.NameIdentifier)
                  ?? User.FindFirstValue("sub");
        if (int.TryParse(sub, out var id)) return id;
        return null;
    }
}
