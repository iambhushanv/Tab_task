import { Component, OnInit } from '@angular/core';
import { Iflower } from '../../models/flower';

@Component({
  selector: 'app-tab-seven',
  templateUrl: './tab-seven.component.html',
  styleUrls: ['./tab-seven.component.scss']
})
export class TabSevenComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }


  tabsArr: Array<Iflower> = [
    {
      tabTitle: 'Rose',
      flowerName: 'rose',
      flowerContent: `<strong>Rose</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'Orchid',
      flowerName: 'orchid',
      flowerContent: `<strong>Orchid</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'Tulip',
      flowerName: 'tulip',
      flowerContent: `<strong>Tulip</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'Lotus',
      flowerName: 'lotus',
      flowerContent: `<strong>Lotus</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    }
  ]

selectedFlower: string = 'Lotus'

 onTabChange(flower: string){
    this.selectedFlower = flower
  }

  trackByFun(index: number, tab: Iflower) {
    return tab.flowerName
  }

}
