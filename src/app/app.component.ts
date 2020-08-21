import { Component, ViewChild, ElementRef } from '@angular/core';

import { LEARNERS } from './learner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'gads-learners';
  learners = LEARNERS;

  currentLearner = 'Sibonelo';
  title = 'Learner Information';
  itemImageUrl = '../assets/sibonelu.JPG';

  recommended = ' may know';
  itemImageUrl2 = '../assets/sydney.JPG';



  @ViewChild('bindingInput') bindingInput: ElementRef;

  getDOMPropertyValue(): any {
    console.warn('DOM property value: ' + this.bindingInput.nativeElement.value);
  }

 
}
