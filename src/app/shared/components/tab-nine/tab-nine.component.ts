import { Component, OnInit } from '@angular/core';
import { Icountry } from '../../models/country';

@Component({
  selector: 'app-tab-nine',
  templateUrl: './tab-nine.component.html',
  styleUrls: ['./tab-nine.component.scss']
})
export class TabNineComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }


  tabsArr: Array<Icountry> = [
    {
      tabTitle: 'India',
      countryName: 'india',
      countryContent: `<strong>India</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'Japan',
      countryName: 'japan',
      countryContent: `<strong>Japan</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'France',
      countryName: 'france',
      countryContent: `<strong>France</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    },
    {
      tabTitle: 'Spain',
      countryName: 'spain',
      countryContent: `<strong>Spain</strong> Lorem ipsum dolor sit. Dolores, odit quod oid quisquam tenetur! Quibusdam?`
    }
  ]

  selectedCountry: string = 'india'

  onTabChange(country: string) {
    this.selectedCountry = country
  }

  trackByFun(index: number, tab: Icountry) {
    return tab.countryName
  }


}
