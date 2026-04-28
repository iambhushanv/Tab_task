import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss']
})
export class TabTwoComponent implements OnInit {
  selectFruit : string = 'mango'
  constructor() { }
  ngOnInit(): void {
  }

  onTabChange(fruit:string){
    this.selectFruit = fruit
  }
}
