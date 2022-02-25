import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@mx-onboarding-workspace/feature-login').then(
        (m) => m.FeatureLoginModule
      ),
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
export class ShellStoreModule {}
