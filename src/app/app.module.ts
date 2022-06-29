import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FcfsComponent } from './components/fcfs/fcfs.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModulesModule } from './pages/shared-modules/shared-modules.module';
import { ScanUpComponent } from './components/scan-up/scan-up.component';
import { ScanDownComponent } from './components/scan-down/scan-down.component';
import { SstfComponent } from './components/sstf/sstf.component';
import { CScanUpComponent } from './components/c-scan-up/c-scan-up.component';
import { CScanDownComponent } from './components/c-scan-down/c-scan-down.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FcfsComponent,
    NavBarComponent,
    ScanUpComponent,
    ScanDownComponent,
    SstfComponent,
    CScanUpComponent,
    CScanDownComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
