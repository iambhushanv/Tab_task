import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-eleven',
  templateUrl: './tab-eleven.component.html',
  styleUrls: ['./tab-eleven.component.scss']
})
export class TabElevenComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  SelectedFrameWork: string = 'Javascript'

  onTabChange(skill: string){
    this.SelectedFrameWork = skill
  }

}
