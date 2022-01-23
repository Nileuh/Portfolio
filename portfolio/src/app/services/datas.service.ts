import { Injectable } from '@angular/core';
import {Techno} from "../models/techno";
import {Project} from "../models/project";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  technos:Techno[] = [];
  technosBdd:Techno[] = [];
  technosWithoutFilter:Techno[] = [];

  constructor(private translate: TranslateService) {
    this.initValues();
  }

  initValues(){
    this.technos = [
      {name:"Angular", logo:"./assets/logos/angular.png", selected:false},
      {name:"Java", logo:"./assets/logos/Java.png", selected:false},
      {name:".NET", logo:"./assets/logos/PngItem_5318011.png", selected:false},
      {name:"Flutter", logo:"./assets/logos/Flutter/Flutter/logo_flutter_1080px_clr.svg", selected:false},
      {name:"PHP", logo:"./assets/logos/PHPLogo.svg", selected:false},
      {name:"VueJS", logo:"./assets/logos/vuejs-seeklogo.com.svg", selected:false}
    ];
    this.technosBdd = [
      {name:"MySQL", logo:"./assets/logos/mysql.png", selected:false},
      {name:"PostgreSQL", logo:"./assets/logos/postgresql.png", selected:false},
      {name:"SQL Server", logo:"./assets/logos/sqlserver.png", selected:false},
      {name:"Firebase", logo:"./assets/logos/firebase.png", selected:false},
    ];
    this.technosWithoutFilter = [
      {name:"JavaSpring", logo:"./assets/logos/spring.svg", selected:false}
    ];
  }

  getTechnos() : Techno[]{
    this.initValues();
    return this.technos;
  }

  getTechnosBdd(): Techno[]{
    this.initValues();
    return this.technosBdd;
  }

  getTechnosWithoutFilter(): Techno[]{
    this.initValues();
    return this.technosWithoutFilter;
  }
}
