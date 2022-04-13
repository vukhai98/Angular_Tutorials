import { Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hello',
  template:`
    <h2>Hello form hello component </h2>
    <p>{{text}}from parent</p>
    <button (click)="onButtonClicked()">Button in Hello</button>
  `
})
export class HelloComponent
implements OnInit,OnChanges,OnDestroy, AfterViewInit,AfterContentInit,AfterViewChecked,AfterContentChecked{

  @Input() text:any; //Inut là cho Component cha tryền dữ liệu vào cho thằng component con
  @Output() buttonClicked : EventEmitter<any> = new EventEmitter<any>();     // Output là component con đẩy cho componet cha 1 sự kiện để component cha quản lý

  constructor(private _dataService : DataService){ //Inject dataservice

  }

  ngOnInit(): void {
    console.log('OnInit ran');
    this._dataService.setTextFromHello(this.text);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('OnChanges ran',{changes});
  }
  ngOnDestroy(): void {
    //console.log('OnDestroy ran');
  }
  ngAfterViewInit(): void {
    //console.log('AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    //console.log('AfterContentInit ran');
  }
  ngAfterViewChecked(): void {
    //console.log('AfterViewChecked ran');
  }
  ngAfterContentChecked(): void {
    //console.log('AfterContentChecked ran');
  }

  onButtonClicked(){
    this.text = 'Changed from Hello Component';
    this.buttonClicked.emit(this.text);
    this._dataService.setTextFromHello(this.text);
  }


}
