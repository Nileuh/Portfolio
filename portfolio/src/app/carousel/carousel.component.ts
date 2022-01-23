import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  images:string[];
  brainsquiz:string[];
  salepim:string[];
  lafdpp:string[];
  koncept:string[];
  admob:string[];
  jeu2D:string[];
  checktour:string[];
  noel:string[];
  keymaster:string[];
  restaurant:string[];


  @Input()
  projectName:string;

  ngOnInit(): void {
    //this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    this.brainsquiz = ['assets/brainsquiz/brainsquiz3.JPG', 'assets/brainsquiz/brainsquiz1.JPG', 'assets/brainsquiz/brainsquiz4.JPG', 'assets/brainsquiz/brainsquiz5.JPG', 'assets/brainsquiz/brainsquiz2.JPG', 'assets/brainsquiz/brainsquiz8.JPG', 'assets/brainsquiz/brainsquiz7.JPG'];
    this.salepim = ['assets/salepim/salepimR.jpg', 'assets/salepim/salepimR3.jpg', 'assets/salepim/salepimR2.jpg'];
    this.lafdpp=['assets/lafdpp/lafdpp2R2.jpg', 'assets/lafdpp/lafdpp2R3.jpg', 'assets/lafdpp/lafdpp2R4.jpg', 'assets/lafdpp/lafdpp2R5.jpg', 'assets/lafdpp/lafdpp2R6.jpg'];
    this.koncept = ['assets/koncept/konceptR4.jpg','assets/koncept/konceptR5.jpg','assets/koncept/konceptR6.jpg','assets/koncept/konceptR3.jpg','assets/koncept/konceptR.jpg', 'assets/koncept/konceptR2.jpg'];
    this.admob = ['assets/admob/admob4R3.jpg', 'assets/admob/admob4R4.jpg', 'assets/admob/admob4R2.jpg', 'assets/admob/admob4R.jpg'];
    this.jeu2D = ['assets/jeu2D/jeu2dR2.jpg', 'assets/jeu2D/jeu2dR3.jpg'];
    this.checktour = ['assets/checktour/checktour1.jpg', 'assets/checktour/checktour2.jpg','assets/checktour/checktour3.jpg', 'assets/checktour/checktour4.jpg','assets/checktour/checktour5.jpg', 'assets/checktour/checktour6.jpg','assets/checktour/checktour7.jpg'];
    this.noel = ['assets/cadeaunoel/cadeaunoelR.jpg', 'assets/cadeaunoel/cadeaunoelR2.jpg'];
    this.keymaster = ['assets/keymaster/keymaster1.JPG', 'assets/keymaster/keymaster2.JPG','assets/keymaster/keymaster3.JPG', 'assets/keymaster/keymaster4.JPG','assets/keymaster/keymaster5.JPG'];
    this.restaurant = ['assets/restaurant/restaurant1.JPG', 'assets/restaurant/restaurant2.JPG', 'assets/restaurant/restaurant3.JPG'];

    if (this.projectName=="brainsquiz"){
      this.images = this.brainsquiz;
    }else if (this.projectName=="salepim"){
      this.images = this.salepim;
    }else if (this.projectName=="lafdpp"){
      this.images = this.lafdpp;
    }else if (this.projectName=="koncept"){
      this.images = this.koncept;
    }else if (this.projectName=="admob"){
      this.images = this.admob;
    }else if (this.projectName=="jeu2D"){
      this.images = this.jeu2D;
    }else if (this.projectName=="checktour"){
      this.images = this.checktour;
    }else if (this.projectName=="noel"){
      this.images = this.noel;
    }else if (this.projectName=="keymaster"){
      this.images = this.keymaster;
    }else if (this.projectName=="restaurant"){
      this.images = this.restaurant;
    }

  }

}



