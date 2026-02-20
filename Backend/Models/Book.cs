using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Book
{
    public int Id { get; set; }

    [Required, MaxLength(250)]
    public string Title { get; set; } = string.Empty;

    [Required, MaxLength(200)]
    public string Author { get; set; } = string.Empty;

    [Required, MaxLength(50)]
    public string Isbn { get; set; } = string.Empty;

    public DateTime PublicationDate { get; set; }

    public int? CreatedByUserId { get; set; }
    public User? CreatedByUser { get; set; }
}
