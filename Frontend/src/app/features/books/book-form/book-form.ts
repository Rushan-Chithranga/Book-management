import { ChangeDetectorRef, Component } from '@angular/core';
import { BookService } from '../../../core/services/book.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './book-form.html',
})
export class BookFormComponent {
  form!: FormGroup;
  editId: number | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      publicationDate: ['', Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId = +id;
      this.loading = true;

      this.bookService.getById(this.editId).subscribe((book) => {
        this.form.patchValue({
          title: book.title,
          author: book.author,
          isbn: book.isbn,
          publicationDate: book.publicationDate ? book.publicationDate.split('T')[0] : '',
        });
        this.loading = false;
        this.cdr.detectChanges();
      });
    }
  }

  save() {
    if (this.form.invalid) return;

    if (this.editId) {
      this.bookService.update(this.editId, this.form.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService.create(this.form.value).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
