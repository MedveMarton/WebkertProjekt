import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagemenu',
  templateUrl: './pagemenu.component.html',
  styleUrls: ['./pagemenu.component.scss']
})
export class PagemenuComponent {


  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  close(){
    this.onCloseSidenav.emit(true);
  }
}
