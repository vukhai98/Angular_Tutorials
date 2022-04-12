/*Các kiểu dữ liệu trong TypeScript */
let a :string;
let b: number;
let c : boolean;
let d: any;
let e: string[] = ['a','b','c']; // number[], boolean[]; any[]
let f: null;
let g: undefined;
let h: void;

enum Color{
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
};

let red = Color.Blue;

// TypeAssertion
let k: string[] = [];
k.push('newString');
console.log(k);

// Interface

interface Point{
    x: number,
    y: number
}

let drawPoint = (point:Point) =>{ // Inline Annotation
    console.log(`Draw a point at X:${point.x} and Y:${point.y}`);
    //.............
};

let movePoint = (point:Point) =>{
    //...........
};
let getDistance = (pointA:Point,pointB:Point ) =>{

};

drawPoint({
    x: 1,
    y: 2
});

//Cohesion 
//Class 
//Access Modifiers: Public,Private,Protected

class Point1 {
    constructor( private _a1:number, private _b1 : number){
    };
    drawPoint() {
        console.log(`Draw a point at X:${this._a1} and Y:${this._b1}`);
    };
    get a1(){
        return this._a1;
    }
    set a1(value:number){
        if(value<0){
            throw new Error ('Value cannot be less than 0');
        }
        this._a1 = value;
    }
};

let point = new Point1(4,3);
point.a1 = 10;
point.drawPoint();


