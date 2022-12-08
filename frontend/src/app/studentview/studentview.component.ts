import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {

  officers: any = []
  id:any
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  filterTerm!: string;

  constructor(private apiService: ApiService,private router:Router) { }

 
  ngOnInit() {
    this.getData();
  }

 




  getData() {
    this.apiService.getofficerList().subscribe(res => {
      this.officers = res
    })
  }

 
  }



