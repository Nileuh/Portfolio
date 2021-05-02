import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    AOS.init();
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
