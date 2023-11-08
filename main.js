// Write a JavaScript program to create a class 
// called 'Rectangle' with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate 
// its area and perimeter.

class Rectangle{
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	rectanglearea(){
		console.log(this.width*this.height);
	}
	perimeter(){
	    console.log(this.width+this.height);
	}
}

let ans=new Rectangle(20,20)
ans.rectanglearea()
ans.perimeter()