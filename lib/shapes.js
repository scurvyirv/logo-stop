//shape parent class
class Shape {
    constructor() {
        this.color = '';
        this.text = '';
        this.textColor = 'white';
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }
//prompt this question
    setTextColor(textColor) {
        this.textColor = textColor;
    }
};

class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="100" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {

}

class Triangle extends Shape {

}

//export our child classes
//circle
module.exports = {Circle};