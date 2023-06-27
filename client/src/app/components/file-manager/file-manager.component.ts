import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  userMenuIsOpen: boolean = true;
  items:Array<String>=['item1','item2','item3','item4','item5','item6','item7','item8','item9','item10','item11'];
  handleUserMenu(){
    this.userMenuIsOpen = !this.userMenuIsOpen; 
  }

  ngOnInit(): void {
    document.body.style.backgroundImage="linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
  }
}
