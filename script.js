//complete this code
class Rectangle {
	constructor(width,height){
	this.width=width;
		this.height=height;
	}
	get widthof(){
		return this.width;
	}
	get heightof(){
		return this.height;
	}
	getArea(){
		return this.width*this.height;
	}
}

class Square extends Rectangle {
	constructor(width){
		super(width);
		this.width=width;
		this.height=width;
		this.side=width;
	}
	getPerimeter(){
		return 4*this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
