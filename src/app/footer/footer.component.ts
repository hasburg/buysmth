import { Component, OnInit } from '@angular/core';
import { eng } from "../../environments/lang/eng.js";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  source = eng;
  constructor() { }

  ngOnInit() {
  }

}
