import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-thirteen',
  templateUrl: './tab-thirteen.component.html',
  styleUrls: ['./tab-thirteen.component.scss']
})
export class TabThirteenComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  selectedSkill : string = 'angular'

  onTabChange(skill: string){
    this.selectedSkill = skill
  }

}
