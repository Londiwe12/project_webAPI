import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-show-dep',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-dep.component.html',
  styleUrl: './show-dep.component.css'
})
export class ShowDepComponent {
dataItem: any;

  constructor(private service:SharedService){}
  DepartmentList : any=[];

  ngOnInit() : void {

  }
  refreshDepList(){
    this.service.getDepList().subscribe(data => {
      this.DepartmentList= data;
    })
  }


}
