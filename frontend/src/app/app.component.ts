import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public user: any;
  constructor(public apiService: ApiService) { }
  isBill = false;
  isComplaint = false;
  isResidentById = true;
  isResidentAll = false;

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
  }

  login() {
    this.apiService.login({'username': this.user.username, 'password': this.user.password});
  }


  logout() {
    this.apiService.logout();
  }

  billButton() {
    this.isBill = true;
    this.isComplaint = false;
    this.isResidentById = false;
    this.isResidentAll = false;
  }

  residentButton1() {
    this.isBill = false;
    this.isComplaint = false;
    this.isResidentById = true;
    this.isResidentAll = false;
  }

  residentButton2() {
    this.isBill = false;
    this.isComplaint = false;
    this.isResidentById = false;
    this.isResidentAll = true;
  }

  complaintButton() {
    this.isBill = false;
    this.isComplaint = true;
    this.isResidentById = false;
    this.isResidentAll = false;
  }
}
