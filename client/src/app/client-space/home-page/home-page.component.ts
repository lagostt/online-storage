import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userMenuIsOpen: boolean = true;
  items:Array<String>=['item1','item2','item3','item4','item5','item6','item7','item8'];
  handleUserMenu(){
    this.userMenuIsOpen = !this.userMenuIsOpen; 
  }

  ngOnInit(): void {
    document.body.style.backgroundImage="linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
  }
}
