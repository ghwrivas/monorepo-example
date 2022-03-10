import { Controller, Get, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AppService } from './app.service';
import { map } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private http: HttpService
  ) {}

  @Get('todos')
  getData() {
    return this.appService.getData();
  }

  @Post('addTodo')
  addTodo() {
    return this.appService.addTodo();
  }

  @Post('recaptcha/verify')
  recaptchaVerify(@Body() postData: { captchaResponse: string }) {
    const { captchaResponse } = postData;
    return this.http
      .post(
        'https://www.google.com/recaptcha/api/siteverify',
        `secret=MI_CAPTCHA_SECRET_KEY&response=${captchaResponse}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .pipe(map((response) => response.data));
  }
}
