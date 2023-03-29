import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription, Unsubscribable } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signForm!: FormGroup;
  isGetOtp: boolean = false;
  otpCounter: number = 0;
  sub!: Subscription;
  otpGenerated!: number;
  isOtpVerified: boolean = false;
  constructor(private fb: FormBuilder, private http:HttpService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.signForm = this.fb.group({
      "userName": ['',[Validators.required]],
      "password": ['',[Validators.required]],
      "mobileNumber": ['',[Validators.required,Validators.maxLength(10)]],
      "isMobNoVerified": [false]
    })
  }

  getOtp() {
    this.isGetOtp = true;

    this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
    console.log(this.otpGenerated)

    this.sub = interval(1000).subscribe((el: number) => {
      this.otpCounter = 60 - el;
      if (this.otpCounter === 0) {
        this.sub.unsubscribe();
      }
      console.log(el);
    })
  }
isIncorrectOtp:boolean = false
  verifyOtp(otp: any) {
    if (this.otpGenerated == otp) {
      this.isOtpVerified = true;
      this.isIncorrectOtp = false;
      this.isGetOtp = false
      this.sub.unsubscribe();
      this.signForm.controls["isMobNoVerified"].setValue(true);
    }else{
      this.isIncorrectOtp = true;
    }
  }

  signUp() {
    console.log(this.signForm.value);
    this.http.postDataToServer("users",this.signForm.value).subscribe((el:any)=>{
      
    })
  }

  ngOnDistroy() {
    this.sub.unsubscribe();
  }
}
