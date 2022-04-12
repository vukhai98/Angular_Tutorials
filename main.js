"use strict";
/*Các kiểu dữ liệu trong TypeScript */
let a;
let b;
let c;
let d;
let e = ['a', 'b', 'c']; // number[], boolean[]; any[]
let f;
let g;
let h;
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
;
let red = Color.Blue;
// TypeAssertion
let k = [];
k.push('newString');
console.log(k);
let drawPoint = (point) => {
    console.log(`Draw a point at X:${point.x} and Y:${point.y}`);
    //.............
};
let movePoint = (point) => {
    //...........
};
let getDistance = (pointA, pointB) => {
};
drawPoint({
    x: 1,
    y: 2
});
//Cohesion 
//Class 
//Access Modifiers: Public,Private,Protected
class Point1 {
    constructor(_a1, _b1) {
        this._a1 = _a1;
        this._b1 = _b1;
    }
    ;
    drawPoint() {
        console.log(`Draw a point at X:${this._a1} and Y:${this._b1}`);
    }
    ;
    get a1() {
        return this._a1;
    }
    set a1(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
        }
        this._a1 = value;
    }
}
;
let point = new Point1(4, 3);
point.a1 = 10;
point.drawPoint();
