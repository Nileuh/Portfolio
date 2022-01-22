import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DatasService} from "../services/datas.service";
import {Techno} from "../models/techno";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {


  technoSelected :string;
  technos: Techno[] = [];

  constructor(private translate: TranslateService, private dataService : DatasService) {
  }

  ngOnInit(): void {
    this.technos = this.dataService.getTechnos();
  }

  public toEN(){
    this.translate.use('en');
  }
  public toFR(){
    this.translate.use('fr');
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

    /*    if (this.playMusic == false) {
          this.playMusic = true;
          let audio = new Audio();
          audio.src = "../../assets/music/Beastie_Boys-Sabotage.mp3";
          audio.load();
          audio.play();
        }*/
  }

  tstselect(){
    console.log("fd");
  }

  remove(techno: Techno): void {
    const index = this.technos.indexOf(techno);

    if (index >= 0) {
      this.technos.splice(index, 1);
    }
  }

  selectedTechno(techno:Techno){
    this.technoSelected = techno.name;
    this.technos.forEach(t => {
      if (t == techno){
        if (t.selected==true){
          t.selected=false;
          this.technoSelected = null;
        }else{
          t.selected = true;
        }
      }else{
        t.selected = false;
      }
    });

  }
}
