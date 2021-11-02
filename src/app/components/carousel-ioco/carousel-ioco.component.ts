import { Component, OnInit } from '@angular/core';
import Service from 'src/app/models/service';

@Component({
  selector: 'app-carousel-ioco',
  templateUrl: './carousel-ioco.component.html',
  styleUrls: ['./carousel-ioco.component.css'],
})
export class CarouselIocoComponent implements OnInit {
  responsiveOptions: any[];
  services: Service = new Service();
  saleItems: Service[];
  ActiveSlide = 0;
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.saleItems = this.services.GetSampleServices();
    console.log(this.saleItems);
  }

  ngOnInit(): void {}
  log(data: any) {
    this.ActiveSlide = data[2];

    console.log('activeSliede', this.ActiveSlide);
  }
}
