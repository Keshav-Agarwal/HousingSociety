import { Component, OnInit, Input } from '@angular/core';
import { ApiService} from "../api.service";

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {
  @Input() byId:boolean;
  residents = [];

  constructor(private apiService : ApiService) { }

  ngOnInit(){


      this.apiService.getAllResident().subscribe((res) => {
        this.residents = res;
      });
  }


}
