const inquirer = require('inquirer');

//import shapes
const { Circle, Square, Triangle } = require('./lib/shapes.js');

//this will prompt questions on the terminal to determine personal logo style
inquirer
    .prompt([
        {
            type: "input",
            message: "what three characters would you like to use?",
            name: "text",
        },
        {
            type: "input",
            message: "what color will your text be?",
            name: "textColor",
        },
        {
            type: "list",
            message: "what shape would you like to use?",
            name: "shapes",
            choices: [
                "circle",
                "square",
                "triangle"
            ]
        },
        {
            type: "input",
            message: "what color would you like to use?",
            name: "color"
        }
    ])
    .then((response) => {
        // this is an instantiation of the newLogo based on responses from terminal 
        let newShape;
            switch (response.shapes) {
                case "circle":
                    newShape = new Circle();
                    break;
                case "square":
                    newShape = new Square();
                    break;
                case "triangle":
                    newShape = new Triangle();
                    break;
        }
        // NEED logic for shape conditions (if/else...OR SWITCH when deciding between circle/square/triangle)

        //invoke the methods from shape class
        newShape.setText(response.text);
        newShape.setColor(response.color);
        newShape.setTextColor(response.textColor);

        //invoke SVG logic into terminal (BUT REALLY WE NEED TO TRANSCRIBE IT INTO SVG FILE using WRITEFILE)
        const renderedShape = newShape.render()
        console.log(renderedShape);
    })
    .catch((error) => {
        console.log(error)
    });
