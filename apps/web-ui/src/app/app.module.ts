import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '@mx-onboarding-workspace/shared/components';
import { ShellWebModule } from '@mx-onboarding-workspace/shell-web';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedComponentsModule, ShellWebModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
