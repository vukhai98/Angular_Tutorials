import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //document.querySelector('app-root'); <app-root></app-root>
  template:`
    <h1
      [ngClass]="{'with-border': withBorder,
      'other-class':true}"
      [style.color]="textColor"
      (mouseover)="onTextMouseOver()"
      (mouseout)="onTextMouseOut()"
     >
    Welcome to {{title}}!
  </h1> <!--StringInterpolation-->
    <button (click)="onButtonClick()" >{{ withBorder ? 'Hide': 'Show'}} Border</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coders.Tokyo Update';
  imageSrc = 'https://image.vtc.vn/resize/Da9xKKWytSoiFZCjo1quiyS4lN8sApMm0/upload/2021/05/30/chelsea-4-06095690.jpg';
  textColor  = 'tomato';
  backgroundColor = 'black';

  styleObj = {color : this.textColor, background: this.backgroundColor};

  withBorder = true;

  onButtonClick(){
   this.withBorder = !this.withBorder; //toggle trong javascript
  }

  onTextMouseOver(){

    this.textColor = 'dodgerblue';

  }
  onTextMouseOut(){

    this.textColor = 'tomato';

  }

}
// DataBinding
// 1. PropertyBinding
// 2. EventBinding

