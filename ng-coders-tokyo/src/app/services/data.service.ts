import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' // global service dung chung cho ca Project
}) //Dependency Injection //Design patten
export class DataService{
  private _textFromHello : any;

  get textFromHello() : string{
    return this._textFromHello;
  }

  setTextFromHello(text: string){
    this._textFromHello = text;
  }
}
