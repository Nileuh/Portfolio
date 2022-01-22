import { Injectable } from '@angular/core';
import {Techno} from "../models/techno";
import {Project} from "../models/project";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  technos:Techno[] = [];

  constructor(private translate: TranslateService) {
    this.initValues();
  }

  initValues(){
    this.technos = [
      {name:"Angular", logo:"./assets/logos/angular.svg", selected:false},
      {name:"Java", logo:"./assets/logos/Java.png", selected:false},
      {name:".NET", logo:"./assets/logos/PngItem_5318011.png", selected:false},
      {name:"Flutter", logo:"./assets/logos/Flutter/Flutter/logo_flutter_1080px_clr.svg", selected:false},
      {name:"PHP", logo:"./assets/logos/PHPLogo.svg", selected:false},
      {name:"VueJS", logo:"./assets/logos/vuejs-seeklogo.com.svg", selected:false}
    ];
  }

  getTechnos() : Techno[]{
    this.initValues();
    return this.technos;
  }
}
