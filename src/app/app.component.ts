import { Component } from '@angular/core';
import { MissionlistComponent } from "./missionlist/missionlist.component";

@Component({
  selector: 'app-root',
  imports: [MissionlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '101024415-lab-test2-comp3133';
}
