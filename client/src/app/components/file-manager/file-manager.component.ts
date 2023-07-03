import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  userMenuIsOpen: boolean = true;
  items:Array<String>= Array.from(Array(100).keys()).map(x => 'item'+ x);
  handleUserMenu(){
    this.userMenuIsOpen = !this.userMenuIsOpen; 
  }

  ngOnInit(): void {
    document.body.style.backgroundColor="#abdcff";
  }
}
