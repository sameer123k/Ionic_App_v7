import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.page.html',
  styleUrls: ['./reserve.page.scss'],
})
export class ReservePage implements OnInit {

  constructor(private Location : Location) { }

  ngOnInit() {
  }
  goBack(){
    this.Location.back();
  }

}
