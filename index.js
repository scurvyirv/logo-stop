const inquirer = require('inquirer');
//import shapes
const {Circle, Square, Triangle} =require('./lib/shapes.js');

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
        // this is an instantiation of the circle class in shapes.js
        const circleInstance = new Circle()
        
        // NEED logic for shape conditions (if/else...)

        //invoke the methods from shape class
        circleInstance.setText(response.text);
        circleInstance.setColor(response.color);
        
        //invoke SVG logic into terminal (BUT REALLY WE NEED TO TRANSCRIBE IT INTO SVG FILE using WRITEFILE)
        const circleSVG = circleInstance.render()
        console.log(circleSVG);
    })
    .catch((error) => {
        console.log(error)
    })
