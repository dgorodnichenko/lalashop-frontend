import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  error: boolean = false;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.createRegistrationForm();
  }

  createRegistrationForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
  }

  submit(): void {
    this.authService.register({
      email: this.registrationForm.value.email,
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      password: this.registrationForm.value.password,
      confirmPassword: this.registrationForm.value.confirmPassword
    }).subscribe({
        next: () => this.router.navigate(['/login']),
        error: () =>  this.error = true           
    })
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
}
