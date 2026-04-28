import { Component, OnInit } from '@angular/core';
import { Ibirds } from '../../models/birds';

@Component({
  selector: 'app-tab-ten',
  templateUrl: './tab-ten.component.html',
  styleUrls: ['./tab-ten.component.scss']
})
export class TabTenComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }


    tabsArr: Array<Ibirds> = [
      {
        tabTitle: 'Sparrow',
        birdName: 'sparrow',
        birdContent: `<strong>Sparrow</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
      },
      {
        tabTitle: 'Peacock',
        birdName: 'peacock',
        birdContent: `<strong>Peacock</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
      },
      {
        tabTitle: 'Parrot',
        birdName: 'parrot',
        birdContent: `<strong>Parrot</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
      },
      {
        tabTitle: 'Flamingo',
        birdName: 'flamingo',
        birdContent: `<strong>Flamingo</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
      }
    ]
  
  selectedBird: string = 'sparrow'
  
   onTabChange(bird: string){
      this.selectedBird = bird
    }
  
    trackByFun(index: number, tab: Ibirds) {
      return tab.birdName
    }
  
}
