import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mission } from '../models/mission';
import { SpacexService } from '../network/spacex.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MissionfilterComponent, MissiondetailsComponent, MatCardModule, MatButtonModule], 
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

  filterMissions(year: string): void {
    this.spaceXService.getMissionsByYear(year).subscribe((data) => {
      this.missions = data;
    });
  }

  selectedMission: Mission | null = null;

  onMissionClick(mission: Mission): void {
    console.log('Mission clicked:', mission);
    this.selectedMission = mission;
  }

  onBack(): void {
    this.selectedMission = null;
  }
}

