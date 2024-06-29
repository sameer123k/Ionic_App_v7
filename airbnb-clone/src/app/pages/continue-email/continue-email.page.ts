import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continue-email',
  templateUrl: './continue-email.page.html',
  styleUrls: ['./continue-email.page.scss'],
})
export class ContinueEmailPage implements OnInit {

  signupData:any [] = []
  constructor() { }

  ngOnInit() {
  }
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  formData:any = {
    name:"",
    code:"",
    number:"",
    email:"",
    password:"",
  }


  GetData(){
  console.log('form Data',this.formData)
  this.signupData.push(this.formData)
  localStorage.setItem('Form Data',JSON.stringify(this.signupData))
  }
}
