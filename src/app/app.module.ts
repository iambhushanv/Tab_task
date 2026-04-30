import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabTwoComponent } from './shared/components/tab-two/tab-two.component';
import { TabThreeComponent } from './shared/components/tab-three/tab-three.component';
import { TabFourComponent } from './shared/components/tab-four/tab-four.component';
import { TabFiveComponent } from './shared/components/tab-five/tab-five.component';
import { TabSixComponent } from './shared/components/tab-six/tab-six.component';
import { TabSevenComponent } from './shared/components/tab-seven/tab-seven.component';
import { TabEightComponent } from './shared/components/tab-eight/tab-eight.component';
import { TabNineComponent } from './shared/components/tab-nine/tab-nine.component';
import { TabTenComponent } from './shared/components/tab-ten/tab-ten.component';
import { TabElevenComponent } from './shared/components/tab-eleven/tab-eleven.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabFourComponent,
    TabFiveComponent,
    TabSixComponent,
    TabSevenComponent,
    TabEightComponent,
    TabNineComponent,
    TabTenComponent,
    TabElevenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
