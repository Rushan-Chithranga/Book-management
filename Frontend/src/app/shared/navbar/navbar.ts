import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { BookService } from '../../core/services/book.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  initial = '?';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private bookService: BookService,
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.userService.getMe().subscribe((user) => {
        this.initial = user?.fullName?.charAt(0)?.toUpperCase() ?? '?';
      });
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.bookService.clearCache();
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
