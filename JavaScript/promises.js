/*class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    static whoAmI(){
        console.log("I am a Rectangle");
    }

    perimeter(){
        const perimeter = 2 * (this.width + this.height);
        return perimeter;
    }

    paint(){
        console.log(`Painting the Rectangle with ${this.color}`);
    }
}

let r1 = new Rectangle(10, 20, "Yellow")
let r2 = new Rectangle(30, 10, "Red")

let area = r1.area();
let perimeter = r1.perimeter();
console.log(area);
console.log(perimeter);

console.log(r1.paint());
console.log(r2.paint());
console.log(Rectangle.whoAmI());
//console.log(r1.whoAmI());   //Throws an Error as Static cannot be called upon an object, Rather it is called directily upon class

// const d = new Date();
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getDate());
*/

//Inheritence

class Shape{
    constructor(color, depth){
        this.color = color;
        this.depth = depth;
    }

    paint(){    //DRY rule: Since repeating, created a new class and inherit the properties into other classes
        console.log("The shape is of color: "+ this.color);
    }

    volume(){
        const vol = this.area()*this.depth;
        return vol;
    }
}

class Rectangle extends Shape{
    constructor(height, width, depth, color){
        super(color, depth)
        this.height = height;
        this.width = width;
        //this.color = color;
    }

    area(){
        let area = this.height*this.width;
        return area;
    }

    perimeter(){
        perimeter = 2 * (this.height + this.width);
        return perimeter;
    }

    /*paint(){
        console.log("The shape is of color: "+ this.color);
    }*/
}

class Circle extends Shape{
    constructor(radius, depth, color){
        super(color, depth)
        this.radius = radius;
        //this.color = color;
    }

    area(){
        return 3.14*this.radius*this.radius;
    }

    perimeter(){
        return 2*3.14*this.radius;
    }

    /*paint(){    //Repeating itself
        console.log("The shape is of color: "+ this.color);
    }*/
}

class Square extends Shape{
    constructor(side, depth, color){
        super(color, depth)
        this.side = side;
        //this.color = color;
        //super(color); //super() here throws an error as in a derived class this.property dosent exist untill super() runs
    }

    area(){
        return this.side*this.side;
    }

    perimeter(){
        return 4*this.side;
    }

    /*paint(){    //Repeating itself
        console.log("The shape is of color: "+ this.color);
    }*/
}

let s1 = new Rectangle(10, 20, 5, "red")
console.log(s1.area());
console.log(s1.volume());

let s2 = new Square(40, 5, "yellow")
console.log(s2.perimeter());
console.log(s2.paint());
console.log(s2.volume());

let s3 = new Circle(17, 5, "blue")
console.log(s3.area());
console.log(s3.paint());

//using two different objects in a function
function whoHasMoreArea(s1, s2){
    if(s1.volume > s2.volume){
        console.log("First shape has more volume. color is: "+ s1.color)
    }else{
        console.log("Second shape has more volume. color is: "+ s2.color)
    }
}

whoHasMoreArea(new Rectangle(10,20,5,"Red"), new Circle(15, 5, "Pink"))