import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { TokenService } from '../../../core/services/token.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  selector: 'app-login',
  templateUrl: './login.html',
})
export class LoginComponent {
  form!: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
  ) {}

  login() {
    if (this.form.invalid) return;

    this.auth.login(this.form.value).subscribe((res) => {
      this.token.set(res.token);
      this.router.navigate(['/']);
    });
  }
}
