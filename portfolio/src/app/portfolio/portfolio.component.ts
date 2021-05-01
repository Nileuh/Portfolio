import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
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

}
