import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../models/mission';
import { SpacexService } from '../network/spacex.service';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss'] 
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];

  constructor(private spaceXService: SpacexService) {}

  ngOnInit(): void {
    this.spaceXService.getMissions().subscribe((data) => {
      this.missions = data;
    });
  }
}

