import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  scrollToElement($element): void {
    // console.log($element);
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
