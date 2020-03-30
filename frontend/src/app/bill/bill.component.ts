import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import {Bill } from "../bill";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bill:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBillById(this.apiService.user_id).subscribe((res) => {
      this.bill = res;
    });
  }

}
