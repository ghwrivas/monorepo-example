import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';

const globalSettings: RecaptchaSettings = { siteKey: 'MI_CAPTCHA_SITE_KEY' };

export const featureHomeRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureHomeRoutes),
    RecaptchaModule,
  ],
  declarations: [HomeComponent],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings,
    },
  ],
})
export class FeatureHomeModule {}
