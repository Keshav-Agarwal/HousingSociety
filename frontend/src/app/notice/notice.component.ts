import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  notices = [];

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getNotices().subscribe((res) => {
        this.notices = res;
      });
  }

}
