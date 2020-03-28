import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Complaint } from "../complaint";

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaints = [];

  constructor(private apiService : ApiService) { }

  ngOnInit(){
    this.apiService.getAllComplaint().subscribe((res) => {
      console.log(res);
      this.complaints = res;
    });
  }

}
