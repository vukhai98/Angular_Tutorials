import { Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root', //document.querySelector('app-root'); <app-root></app-root>
  template:`
    <h1
      [ngClass]="{'with-border': withBorder,
      'other-class':true}"
      [style.color]="textColor"
     >
    Welcome to {{title}}!
  </h1> <!--StringInterpolation-->
    <button (click)="onButtonClick()" >{{ withBorder ? 'Hide': 'Show'}} Border</button>
    <app-hello [text]="title" (buttonClicked)="onButtonClickedFromHello($event)" ></app-hello>
    <app-hi></app-hi>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent
implements OnInit,OnChanges,OnDestroy, AfterViewInit,AfterContentInit,AfterViewChecked,AfterContentChecked {
  title = 'Coders.Tokyo Update';
  imageSrc = 'https://image.vtc.vn/resize/Da9xKKWytSoiFZCjo1quiyS4lN8sApMm0/upload/2021/05/30/chelsea-4-06095690.jpg';
  textColor  = 'tomato';
  backgroundColor = 'black';

  styleObj = {color : this.textColor, background: this.backgroundColor};

  withBorder = true;

  ngOnInit(): void {
    console.log('Parent OnInit ran');

  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('Parent OnChanges ran',{changes});
  }
  ngOnDestroy(): void {
    //console.log('Parent OnDestroy ran');
  }
  ngAfterViewInit(): void {
    //console.log('Parent AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    //console.log('Parent AfterContentInit ran');
  }
  ngAfterViewChecked(): void {
    //console.log('Parent AfterViewChecked ran');
  }
  ngAfterContentChecked(): void {
    //console.log('Parent AfterContentChecked ran');
  }

  onButtonClick(){
   this.withBorder = !this.withBorder; //toggle trong javascript
   this.title = 'Hello world I am ChickenCode';
  }

  onButtonClickedFromHello(event:any){
      this.title = event;
  }
}
// DataBinding
// 1. PropertyBinding
// 2. EventBinding

