import { Component } from '@angular/core';
import { BookService } from '../../../core/services/book.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../../Models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.html',
})
export class BookListComponent {
  books: Book[] = [];
  loading = false;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.loading = this.books.length === 0;

    this.bookService
      .getAll()
      .subscribe((books) => {
        this.books = books;
        this.loading = false;
      });
  }

  delete(id: number) {
    if (!confirm('Delete this book?')) return;
    this.bookService.delete(id).subscribe(() => {
      this.books = this.books.filter((b) => b.id !== id);
    });
  }
}
