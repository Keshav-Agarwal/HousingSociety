import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from './bill';
import { Notices } from "./notices";
import { Residents } from './residents';
import { Complaint } from './complaint';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private httpOptions: any;
  public token: string;
  public refreshtoken: string;
  public token_expires: Date;
  public user_id: null;
  public username: string;
  public errors: any = [];

  apiURL: string = 'https://housingsocietyapi.herokuapp.com';

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  public getAllBill() {
    return this.httpClient.get<Bill[]>(`${this.apiURL}/billapi/`);
  }

  public getAllResident() {
    return this.httpClient.get<Residents[]>(`${this.apiURL}/residentapi/`);
  }

  public getAllComplaint() {
    return this.httpClient.get<Complaint[]>(`${this.apiURL}/complaintapi/`);
  }

  public getBillById(id: number) {
    return this.httpClient.get<Bill>(`${this.apiURL}/billapi/${id}/`);
  }

  public getResidentByID(id: number) {
    return this.httpClient.get<Residents>(`${this.apiURL}/residentapi/${id}/`);
  }

  public getComplaintByID(id: number) {
    return this.httpClient.get<Complaint[]>(`${this.apiURL}/complaintapi/${id}/`);
  }

  public getNotices() {
    return this.httpClient.get<Notices[]>(`${this.apiURL}/noticeapi/`);
  }

  public makeComplaint(complaint: Complaint) {
    complaint.user = this.user_id;
    complaint.time_completed = '2012-09-04 06:00:00.000000';
    return this.httpClient.post(`${this.apiURL}/complaintapi/`, complaint);
  }

  public login(user) {
    this.httpClient.post(`${this.apiURL}/api/token/`, JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }

  public refreshToken() {
    this.httpClient.post(`${this.apiURL}/api/token/refresh/`, JSON.stringify({token: this.refreshtoken}), this.httpOptions).subscribe(
      data => {
        this.updateData(data);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }

  public logout() {
    this.token = null;
    this.token_expires = null;
    this.user_id = null;
  }

  private updateData(token) {
    this.token = token.access;
    this.refreshtoken = token.refresh;
    this.errors = [];


    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.user_id = token_decoded.user_id;
  }

  getToken() {
    return this.token;
  }
}
