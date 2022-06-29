import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CScanDownComponent } from './components/c-scan-down/c-scan-down.component';
import { CScanUpComponent } from './components/c-scan-up/c-scan-up.component';
import { FcfsComponent } from './components/fcfs/fcfs.component';
import { HomeComponent } from './components/home/home.component';
import { ScanDownComponent } from './components/scan-down/scan-down.component';
import { ScanUpComponent } from './components/scan-up/scan-up.component';
import { SstfComponent } from './components/sstf/sstf.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'fcfs', component: FcfsComponent},
  {path: 'scan-down', component: ScanDownComponent},
  {path: 'scan-up', component: ScanUpComponent}, 
  {path: 'c-scan-up', component: CScanUpComponent},
  {path: 'c-scan-down', component: CScanDownComponent},
  {path: 'sstf', component: SstfComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
