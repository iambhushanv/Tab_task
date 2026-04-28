import { Component, OnInit } from '@angular/core';
import { Ifruit } from '../../models/fruit';

@Component({
  selector: 'app-tab-eight',
  templateUrl: './tab-eight.component.html',
  styleUrls: ['./tab-eight.component.scss']
})
export class TabEightComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }


    tabsArr: Array<Ifruit> = [
      {
        tabTitle: 'Mango',
        fruitName: 'mango',
        fruitContent: `<strong>Mango</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
      },
      {
        tabTitle: 'Apple',
        fruitName: 'apple',
        fruitContent: `<strong>Apple</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
      },
      {
        tabTitle: 'Banana',
        fruitName: 'banana',
        fruitContent: `<strong>Banana</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
      },
      {
        tabTitle: 'Orange',
        fruitName: 'orange',
        fruitContent: `<strong>Orange</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
      }
    ]
  
  selectedFruit: string = 'mango'
  
   onTabChange(fruit: string){
      this.selectedFruit = fruit
    }
  
    trackByFun(index: number, tab: Ifruit) {
      return tab.fruitName
    }
  

}
