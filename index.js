// import dependencies for project

const inquirer = require('inquirer');
const jest = require("jest");
const fs = require('fs');
const {SquareClass, TriangleClass, CircleClass} = require("./lib/shapes");

// create array of questions for user to enter svg file content
const questions = [   
    {
        type: 'input',
        name: 'text',
        message: 'Please enter three characters for logo text:',
        validate: function (input) {
          if (input.length <= 3) {
            return true;
          } else {
            return 'Please enter exactly three characters.';
          }
        },
      },
    {
      type: 'input',
      name: 'textcolor',
      message: 'Please enter a color for the text logo:',
    },
    {
    type: 'list',
    message: 'Please select the shape for your logo?',
    name: 'shape',
    choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapecolor',
      message: 'Please enter a color for the shape:',
    },

    ];


// Defines a SvgFileClass that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.

class SvgFileClass{
    constructor(){
        this.textEl = ""
        this.shapeEl = ""
    }

    setTextEl(text,color){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeEl(shape){
        //console.log("ShapeJPM: " + shape)
        this.shapeEl = shape.render()

    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
    
}

    
// function to write .svg file with users entered content
function writeToFile(fileName, data) {

   
   // construct logo.svg file content based on users input
    const fileContent = buildFile(data);
  
  // write README.MD file to disk
    fs.writeFile(fileName, fileContent, (err) =>
      err ? console.log(error) : console.log("Generated logo.svg")
    )
  
  
  }


function buildFile(data){

	    // get entered logo text
        var logoText = (data.text.toUpperCase())
        var logoTextColor = (data.textcolor)
        var logoShape = (data.shape.toUpperCase())
        var logoShapeColor = (data.shapecolor)
      
	//determine the logo shape
	if (logoShape === "SQUARE") {
		shapeSelected = new SquareClass();
			}
	else if (logoShape === "CIRCLE") {
		shapeSelected = new CircleClass();
	}
	else if (logoShape === "TRIANGLE" ) {
		shapeSelected = new TriangleClass();
	}
	else {
		console.log("Invalid shape!");
	}

    //set the logo shape color
	shapeSelected.setColor(logoShapeColor);

    // create new SvgFileClass object
	var svgFile = new SvgFileClass();

    //set the new SVG file text, shape and colors
	svgFile.setTextEl(logoText, logoTextColor);
	svgFile.setShapeEl(shapeSelected);

    //render the svg file string with user selected attributes 
	let fileContent = svgFile.render();

    // return the file string
    return fileContent;
  }
  
  
  

    // initialize to server side program
function init() {
    // use inquirer package to prompt the user for README.md file content
      inquirer
      .prompt(
        questions
      )
      .then((data) => {
     // call writeToFile to render and write the README.md file to disk
        writeToFile("./logo.svg", data)
      });
    
    }
    
    
    // Function call to initialize app
    init();
