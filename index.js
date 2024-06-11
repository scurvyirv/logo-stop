const inquirer = require('inquirer');
const fs = require('fs');

//import shapes
const { Circle, Square, Triangle } = require('./lib/shapes.js');

//this will prompt questions on the terminal to determine personal logo style
inquirer
    .prompt([
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
            message: "what color will your shape be?",
            name: "color"
        },
        {
            type: "input",
            message: "what three characters would you like to use?",
            name: "text",
        },
        {
            type: "input",
            message: "what color will your text be?",
            name: "textColor",
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
    
        // invoke the methods from shape class
        newShape.setText(response.text);
        newShape.setColor(response.color);
        newShape.setTextColor(response.textColor);
    
        // invoke SVG logic into terminal
        const renderedShape = newShape.render();
        console.log(renderedShape);
    
        // invoke SVG logic into a text file
        return fs.writeFile('logo.svg', renderedShape, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('logo file successfully generated!')
        });
    })

    .catch((error) => {
        console.log(error)
    });
