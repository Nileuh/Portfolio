import {Component, Input, OnInit} from '@angular/core';
import {Techno} from "../models/techno";
import {DatasService} from "../services/datas.service";
import {Project} from "../models/project";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {

  @Input()
  technoSelected : string;

  technos: Techno[] = [];

  constructor(private dataService : DatasService) { }

  ngOnInit(): void {
    this.technos = this.dataService.getTechnos();
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
