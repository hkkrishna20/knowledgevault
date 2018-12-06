
import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { User } from '../models/auth/user';
import { MongoService } from '../mongo.service';
import { UserDetails } from '../models/reg/userdetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;
  token: string;

  userDetails: UserDetails;

  logInStatus: boolean = true;

  constructor(private router: Router, private srvc: ShareService, private loginsrvc: LoginService, private mongo: MongoService) {
  }

  ngOnInit() {
    this.srvc.getValue()
      .subscribe(
        val => {
          console.log('got the status: ', val)
          this.logInStatus = val;
        }
      );
  }

  bhejdo(): void {
    this.logInStatus = false;
    this.srvc.setValue(this.logInStatus);
  }

  shurukaro() {
    // if(this.username === 'abc') this.router.navigate(['sme'])
    this.logIn();
  }

  getUserDetails() {
    console.log('inside getUserDetails: ', this.username);
    this.mongo.fetchUserData(this.username, this.token)
      .subscribe(data => {
        this.userDetails = data;
        localStorage.setItem('userrole', this.userDetails.role);
        console.log('user details', Object.values(this.userDetails));
      });
  }

  logIn(): void {
    console.log('getting the flag value before actually logging in');

    const user = new User(this.username, this.password);

    this.loginsrvc.login(user)
      .subscribe(
        data => {
          this.token = data.token;
          // console.log('data from validation ', data);
        }
      );

    localStorage.setItem('tokenVal', this.token)

    this.getUserDetails();
    if (this.userDetails.username === this.username) {
      this.bhejdo();
      const role = localStorage.getItem('userrole');
      console.log(this.userDetails.role);
      if (this.userDetails.role === 'General User') {
        this.router.navigate(['user']);
      } else {
        this.router.navigate(['sme']);
      }
    } else {
      alert('Invalid Credentials');
    }
  }

}
