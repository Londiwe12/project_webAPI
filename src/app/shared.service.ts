import { HttpClientModule } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [],
})
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:7275/api"
  readonly PhotoUrl = "https://localhost:7275/"

  constructor(private http: HttpClient) { }

  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options);
  }

  getDepList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Department');
  }

  addDep(val: any) {
    return this.http.post<any>(this.APIUrl + '/Department', val);
  }

  updateDep(val: any) {
    return this.http.put<any>(this.APIUrl + '/Department', val);
  }

  deleteDep(val: any) {
    return this.http.delete(`${this.APIUrl}/Department/${val}`);
  }

  getEmpList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Employee');
  }

  addEmployee(val: any) {
    return this.http.post<any>(this.APIUrl + '/Employee', val);
  }

  updateEmployee(val: any) {
    return this.http.put<any>(this.APIUrl + '/Employee', val);
  }

  deleteEmployee(val: any) {
    return this.http.delete(`${this.APIUrl}/Employee/${val}`);
  }

  //save Profile picturea
  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + 'Employee/SaveFile', val);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Employee/GetAllDepartmentNames');
  }
}
