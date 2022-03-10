import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mx-onboarding-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  captchaResponse = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    console.log('init home');
  }

  resolved(captchaResponse: string): void {
    console.log(captchaResponse)
    this.http.post('api/recaptcha/verify', { captchaResponse }).subscribe((response) => {
      console.log('respnose', response)
    });
  }

  onError(errorDetails: RecaptchaErrorParameters): void {
    this.captchaResponse += `ERROR; error details (if any) have been logged to console\n`;
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  next() {
    this.router.navigate(['otp']);
  }
}
