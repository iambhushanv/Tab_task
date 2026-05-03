import { Component, OnInit } from '@angular/core';
import { Iskills2 } from '../../models/skills2';

@Component({
  selector: 'app-tab-twelve',
  templateUrl: './tab-twelve.component.html',
  styleUrls: ['./tab-twelve.component.scss']
})
export class TabTwelveComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  selectedSkill1: string = 'html';

  skills: Array<Iskills2> = [
    {
      id: 'html',
      name: 'HTML',
      dif: 'HTML (HyperText Markup Language) is the standard language used to create and structure web pages using elements called tags.'
    },
    {
      id: 'css',
      name: 'CSS',
      dif: 'CSS (Cascading Style Sheets) is a styling language used to control the appearance and layout of HTML elements on a web page.'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      dif: 'JavaScript is a programming language that adds interactivity and dynamic behavior to web pages, making them responsive to user actions.'
    },
    {
      id: 'angular',
      name: 'Angular',
      dif: 'Angular is a TypeScript-based frontend framework by Google used to build fast, scalable, single-page web applications with structured code.'
    }
  ];

  onTabchange(skill: string){
    this.selectedSkill1 = skill
  }

  trackByFun(index: number, skill: Iskills2){
    return skill.name
  }

}
