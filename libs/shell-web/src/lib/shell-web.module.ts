import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@mx-onboarding-workspace/feature-home').then(
        (m) => m.FeatureHomeModule
      ),
  },
  {
    path: 'otp',
    loadChildren: () =>
      import('@mx-onboarding-workspace/feature-otp').then(
        (m) => m.FeatureOtpModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShellWebModule {}
