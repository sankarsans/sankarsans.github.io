import { Component, OnInit } from '@angular/core';
import AOS from "aos";
AOS.init();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goAbout(){
    let x = document.querySelector("#about");
    if (x){
        x.scrollIntoView({behavior: 'smooth',});
    }
  }

  goExperince(){
    let x = document.querySelector("#experience");
    if (x){
        x.scrollIntoView({behavior: 'smooth',});
    }
  }

  goWork(){
    let x = document.querySelector("#work");
    if (x){
        x.scrollIntoView({behavior: 'smooth',});
    }
  }

  goContact(){
    let x = document.querySelector("#contact");
    if (x){
        x.scrollIntoView({behavior: 'smooth',});
    }
  }

  resume(){
    window.open('../../assets/sankar-ui-developer-resume.pdf', '_blank');
  }
}
