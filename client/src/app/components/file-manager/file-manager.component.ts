import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  userMenuIsOpen: boolean = true;
  
  fileImgUrl:String='assets/images/file.png';
  dirImgUrl:String='assets/images/folder.png';

  items:{ [key: string]: String }[]= Array.from(Array(100).keys()).
                   map(x => ({type: x%3==0?'file':'folder', name:'element'+x }));

  handleUserMenu(){
    this.userMenuIsOpen = !this.userMenuIsOpen; 
  }

  ngOnInit(): void {
    document.body.style.backgroundColor="#abdcff";
  }
}
