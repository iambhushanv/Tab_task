import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tabs';

@Component({
  selector: 'app-tab-six',
  templateUrl: './tab-six.component.html',
  styleUrls: ['./tab-six.component.scss']
})
export class TabSixComponent implements OnInit {

  tabsArr: Array<Itab> = [
    {
      tabTitle: 'Angular 14',
      frameWorkName: 'angular 14',
      tabContent: `<strong>India</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'Node',
      frameWorkName: 'node',
      tabContent: `<strong>Node</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'Express',
      frameWorkName: 'express',
      tabContent: `<strong>Express</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'MongoDB',
      frameWorkName: 'mongodb',
      tabContent: `<strong>MongoDB</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    }
  ]

  selectedSkill: string = 'angular 14'
  constructor() { }
  ngOnInit(): void {
  }
  onTabChange(skill: string){
    this.selectedSkill = skill
  }

  trackByFun(index: number, tab: Itab){
    return tab.frameWorkName
  }

}
