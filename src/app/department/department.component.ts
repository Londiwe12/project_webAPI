import { Component } from '@angular/core';

import { ShowDepComponent } from "./show-dep/show-dep.component";

@Component({
    selector: 'app-department',
    standalone: true,
    templateUrl: './department.component.html',
    styleUrl: './department.component.css',
    imports: [ ShowDepComponent]
})
export class DepartmentComponent {

}
