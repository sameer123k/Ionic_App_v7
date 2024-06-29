import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.page.html',
  styleUrls: ['./email-otp.page.scss'],
})
export class EmailOtpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  passwordType: string = 'password';
 passwordIcon: string = 'eye-off';

 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }

}
