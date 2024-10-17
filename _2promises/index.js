//Classes
class Rectangle{
    constructor(height,width,color){
        this.height=height;
        this.width=width;
        this.color=color;
    }
    area(){
        const area=this.height*this.width;
        return area;
    }

    paint(){
        console.log(`The color of rect is ${this.color}`);
    }
}

const rect=new Rectangle(3,4)
let area=rect.area();
console.log(area);

//Inheritance

