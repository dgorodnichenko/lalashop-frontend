import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showError: boolean = false;

  loginField: string = "";
  passwordField: string = "";

  constructor(private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder) {
  //             if(this.tokenStorageService.getUser()) {
  //               this.router.navigate(['/profile']);
  //             }
  }

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
  }

  createLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: [this.loginField, Validators.compose([Validators.required, Validators.email])],
      password: [this.passwordField, Validators.compose([Validators.required])]
    });
  }

  submit(): void {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe({
      next: (data) => {
        this.tokenStorageService.saveToken(data.token);
        this.tokenStorageService.saveUser(data);

        this.router.navigate(['/profile']);
      },
      error: () => {
        this.showError = true;
      }
    });
  }
}
