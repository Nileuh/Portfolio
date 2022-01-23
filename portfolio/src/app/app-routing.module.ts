import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CvComponent} from "./cv/cv.component";
import {DocumentsComponent} from "./documents/documents.component";

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  //{ path: 'resume', component: CvComponent },
  { path: 'documents', component: DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
