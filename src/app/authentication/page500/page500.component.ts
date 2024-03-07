import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-page500',
    templateUrl: './page500.component.html',
    styleUrls: ['./page500.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        MatButtonModule,
        RouterLink,
    ],
})
export class Page500Component {
  constructor() {
    // constructor
  }
}
