import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../models/mission';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-missiondetails',
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.scss'
})
export class MissiondetailsComponent {

  @Input() mission!: Mission;
  @Output() back = new EventEmitter<void>();

  onBackClick(): void {
    this.back.emit();
  }

}
