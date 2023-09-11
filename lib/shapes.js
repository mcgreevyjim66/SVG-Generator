class ShapeClass{
// Defines a class called ShapeClass which has a constructor intializing 'color' and sets the 'color' value.

    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

// Defines a SquareClass class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
class SquareClass extends ShapeClass{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`
    }
}
// Defines a TriangleClass class that extends Shape and renders an SVG Triangle with position, size, and fill color based on the current instance's properties.
class TriangleClass extends ShapeClass{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`
    }
};

// Defines a CircleClass that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
class CircleClass extends ShapeClass{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`
    }
}

module.exports = {SquareClass, TriangleClass, CircleClass}