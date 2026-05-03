import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tabs';

@Component({
  selector: 'app-tab-fourteen',
  templateUrl: './tab-fourteen.component.html',
  styleUrls: ['./tab-fourteen.component.scss']
})
export class TabFourteenComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  selectedSkill : string = 'node'
 tabsArr: Array<Itab> = [
     {
       tabTitle: 'Angular 14',
       frameWorkName: 'angular 14',
       tabContent: `<strong>Angular 14</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
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

   onTabChange(skill:string){
    this.selectedSkill = skill
   }



}
