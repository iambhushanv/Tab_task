import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-five',
  templateUrl: './tab-five.component.html',
  styleUrls: ['./tab-five.component.scss']
})
export class TabFiveComponent implements OnInit {
  selectedBird: string = 'Sparrow'
  constructor() { }
  ngOnInit(): void {
  }
  onTabChange(bird: string){
    this.selectedBird = bird
  }

}
