import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedComponentsModule } from '@mx-onboarding-workspace/shared/components';
import { ShellStoreModule } from '@mx-onboarding-workspace/shell-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    ShellStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
