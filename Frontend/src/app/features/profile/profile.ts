import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { BookService } from '../../core/services/book.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
})
export class ProfileComponent {
  user: any = null;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private bookService: BookService,
  ) {}

  ngOnInit() {
    this.userService.getMe().subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.bookService.clearCache();
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
