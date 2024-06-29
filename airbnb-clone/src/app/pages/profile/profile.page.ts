import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  Data:any
  nameData:any [] = []
  constructor() {
   this.Data = localStorage.getItem('Form Data')
   this.Data= JSON.parse(this.Data)
   console.log(this.Data)
    this.Data.map((value:any)=>{
     this.nameData.push(value.name)
    })
  }

  ngOnInit() {
    console.log('name data',this.nameData)
  }


}
