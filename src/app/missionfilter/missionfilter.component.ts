import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  imports: [],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.scss'
})
export class MissionfilterComponent {
  
  @Output() yearSelected = new EventEmitter<string>();

  filterMissionByYear(year: string) {
    this.yearSelected.emit(year);
  }

}
