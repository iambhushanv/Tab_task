import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-fifteen',
  templateUrl: './tab-fifteen.component.html',
  styleUrls: ['./tab-fifteen.component.scss']
})
export class TabFifteenComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

   SelectedFrameWork: string = 'Javascript'

  onTabChange(skill: string){
    this.SelectedFrameWork = skill
  }

}
