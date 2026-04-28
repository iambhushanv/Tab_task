import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-four',
  templateUrl: './tab-four.component.html',
  styleUrls: ['./tab-four.component.scss']
})
export class TabFourComponent implements OnInit {
  selectedCountry : string = 'India'
  constructor() { }
  ngOnInit(): void {
  }
onTabChange(country: string){
  this.selectedCountry = country
}

}
