import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
    document.body.style.backgroundImage="linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
  }
}
