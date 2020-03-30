import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Complaint } from "../complaint";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  submitted = false;
  valid = true;
  myForm: FormGroup;
  categories = [
    {'id':"Cleanliness", 'name': "Cleanliness"},
    {'id':"Parking", 'name': "Parking"},
    {'id':"Staff", 'name': "Staff"},
    {'id':"Billing", 'name': "Billing"},
    {'id':"Residents", 'name': "Residents"},
    {'id':"Other", 'name': "Other"}
];

  complaints = [];

  constructor(private apiService : ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.apiService.getAllComplaint().subscribe((res) => {
      this.complaints = res;
    });

    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(250)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      category: ['', [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      this.apiService.makeComplaint(form.value).subscribe((res) => {
        this.complaints.push(res);
        this.valid = true;
        this.submitted = false;
      });
    }
    else {
      this.valid = false;
      this.submitted = true;
    }
  }

}
