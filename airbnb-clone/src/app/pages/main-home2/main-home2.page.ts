import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-main-home2',
  templateUrl: './main-home2.page.html',
  styleUrls: ['./main-home2.page.scss'],
})
export class MainHome2Page implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
    goBack() {
      this.location.back();
      }
  
}
