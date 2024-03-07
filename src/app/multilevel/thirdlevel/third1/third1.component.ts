import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-third1',
    templateUrl: './third1.component.html',
    styleUrls: ['./third1.component.scss'],
    standalone: true,
    imports: [BreadcrumbComponent],
})
export class Third1Component {
  constructor() {
    // constructor
  }
}
