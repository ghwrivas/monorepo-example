import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mx-onboarding-workspace-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('init otp');
  }

  next() {
    this.router.navigate(['home']);
  }
}
