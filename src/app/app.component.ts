import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/fontawesome-free';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faCoffee = faCoffee;
}
