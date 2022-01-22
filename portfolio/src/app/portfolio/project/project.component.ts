import {Component, Input, OnInit} from '@angular/core';
import {Techno} from "../../models/techno";
import {Project} from "../../models/project";
import {DatasService} from "../../services/datas.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  technoSelected: string;

  technos: Techno[] = [];

  constructor(private dataService: DatasService) {
  }

  ngOnInit(): void {
    this.technos = this.dataService.getTechnos();
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});

    /*    if (this.playMusic == false) {
          this.playMusic = true;
          let audio = new Audio();
          audio.src = "../../assets/music/Beastie_Boys-Sabotage.mp3";
          audio.load();
          audio.play();
        }*/
  }
}
