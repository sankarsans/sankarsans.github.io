import { Component, HostListener, OnInit } from '@angular/core';
import AOS from "aos";
AOS.init();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentPosition = window.pageYOffset;
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e:any) {
    let scroll = e.scrollingElement.scrollTop;
    console.log("this is the scroll position", scroll)
    if (scroll > this.currentPosition) {
      let x = document.querySelector("#header");
      x?.classList.remove('down');
      x?.classList.add('up');
    } else {
      let x = document.querySelector("#header");
      x?.classList.add('down');
      x?.classList.remove('up');
    }
    this.currentPosition = scroll;
  }

  goWork(){
    let x = document.querySelector("#work");
    if (x){
        x.scrollIntoView({behavior: 'smooth',});
    }
  }

}
