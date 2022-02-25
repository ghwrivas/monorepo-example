import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { OtpComponent } from './otp/otp.component';

export const featureOtpRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: OtpComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureOtpRoutes)],
  declarations: [OtpComponent],
})
export class FeatureOtpModule {}
