const {CircleClass, SquareClass, TriangleClass} = require("./shapes.js")
// Imports the CircleClass, SquareClass, and TriangleClass shape classes from the 'shapes.js' module and defines a test suite for the shape class.  
// The test case checks whether "Circle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Shape
describe('CircleClass', () => {
    test('Circle renders correctly', () => {
      const shape = new CircleClass();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle>`);
          
    });
  });
  // Square Shape
  describe('SquareClass', () => {
      test('Square renders correctly', () => {
        const shape = new SquareClass();
        var color =('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"></rect>`);
      });
    });
  // Triangle Shape
  describe('TriangleClas', () => {
      test('Triangle renders correctly', () => {
        const shape = new TriangleClass();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`);
      });
    });
    