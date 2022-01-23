import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CvComponent} from "./cv/cv.component";

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'resume', component: CvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
