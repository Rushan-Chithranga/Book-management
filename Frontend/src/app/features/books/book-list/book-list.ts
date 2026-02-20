import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class BookListComponent implements OnInit {

  books: Book[] = [];
  loading = true;

  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading = true;

    this.bookService.getAll(true).subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  delete(id: number): void {
    if (!confirm('Delete this book?')) return;

    this.bookService.delete(id).subscribe(() => {
      this.books = this.books.filter(b => b.id !== id);
      this.cdr.detectChanges();
    });
  }
}
