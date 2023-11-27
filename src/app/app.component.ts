// app.component.ts
import { Component, OnInit,NgModule } from '@angular/core';
import { SharedService } from './shared.service';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, SharedService, HttpClientModule],
  standalone:true,

 
})
export class AppComponent implements OnInit {
  title = 'project_webAPI';
  departments: any[] = [];


  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService
    .get('https://localhost:7275/api/department', { withCredentials: true })
    .subscribe(
      (data: any) => {
        console.log(data);
        this.departments = data;
        
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
}
}
  
  
