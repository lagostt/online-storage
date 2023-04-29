import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  ngOnInit(): void {
    document.body.style.backgroundImage="linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
  }
}
