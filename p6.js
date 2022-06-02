
// Shape Class
class Shape {
    // Constuctor with default parameters
    constructor(sides = []) {
        this.sides = sides;
    }
    // Method perimeter
    perimeter() {
        // if the array have some length then reduce the array as sum
        return (this.sides.length) ? this.sides.reduce((a, b) =>  a + b) : 0;
    }
}
/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

class Rectangle extends Shape {
    // Constuctor with default parameters
    constructor(length=0,width=0) {
    super([length,width,length,width]);
    this.length=length;
    this.width=width;
    }
    area()
    {
    return this.length*this.width;
    }
}
/*
console.log(new Rectangle(4,4).perimeter()); // 16
console.log(new Rectangle(4,4).area()); // 16
console.log(new Rectangle(5,5).perimeter()); // 20
console.log(new Rectangle(5,5).area()); // 25
console.log(new Rectangle(0,0).perimeter()); // 0
console.log(new Rectangle(0,0).area()); // 0
*/

// inherting the triangle class from shape class using extends 
class Triangle extends Shape{
    // constructor with sidea,sideb,sidec
    constructor(sideA=0, sideB=0,sideC=0){
    // calling super from parent class
    super(sideA, sideB, sideC)
    // initailizing each values
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
    }
// function to return area using heron's formula
    area() {
        const s= (this.sideA+this.sideB+this.sideC)/2;
        return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
    }
    perimeter() {
        const peri = this.sideA+this.sideB+this.sideC
        return peri
    }
}
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/


// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

// loop though the data set and store each array in 'element'
for (const element of data)
{
   let object = null; // initially set a variable to null
 
   // store the length of current element
   len = element.length;

   switch(len) // compare the length value with different cases
   {
       case 2:
         {
           // create new Rectangle, with values of first and second elements of current sub array
           object = new Rectangle(element[0], element[1]);
           // output results 
           console.log(`${(object.length == object.width)?"Square":"Rectangle"} with sides ${element.toString()} has perimeter of ${object.perimeter()} and area of ${object.area()}`);
           break;
         }
       
      case 3:
        {
           // create new Triangle, with values of first, second and third elements of current sub array
           object = new Triangle(element[0], element[1], element[2]);
           // output the results
           console.log(`Triangle with sides ${element.toString()} has perimeter of ${object.perimeter()} and area of ${object.area()}`);
           break;
        }
      default: console.log(`Shape with ${len} sides is unsupported`); // default option
   }
}