import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { cards } from 'src/app/shared/models/cards';

@Component({
  selector: 'app-pharmstore',
  templateUrl: './pharmstore.component.html',
  styleUrls: ['./pharmstore.component.scss']
})
export class PharmstoreComponent {

  cards: any = cards;
  breakpoint: number | undefined;

  public cardsslice = this.cards.slice(0, 5);

  OnPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.cards.length){
      endIndex = this.cards.length;
    }
    this.cardsslice = this.cards.slice(startIndex, endIndex);
  }



ngOnInit() {

  if (window.innerWidth <= 1200 && window.innerWidth  >= 900) {
    this.breakpoint = 3
  } else if (window.innerWidth  <= 900 && window.innerWidth  >= 600){
    this.breakpoint = 2
  } else if (window.innerWidth <= 600){
    this.breakpoint = 1
  } else {
    this.breakpoint = 4;
  }

}

onResize(event: any) {
  if (event.target.innerWidth <= 1200 && event.target.innerWidth  >= 900) {
    this.breakpoint = 3
  } else if (event.target.innerWidth  <= 900 && event.target.innerWidth  >= 600){
    this.breakpoint = 2
  } else if (event.target.innerWidth <= 600){
    this.breakpoint = 1
  } else {
    this.breakpoint = 4;
  }
}
}
