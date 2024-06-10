//shape parent class with specific methods with empty strings subject to change based on user's prompt selections
class Shape {
    constructor() {
        this.color = '';
        this.text = '';
        this.textColor = '';
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }
};

// circle class from SVG
class Circle extends Shape {
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="100" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

// square class from SVG
class Square extends Shape {
    render () {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="150" y="150" width="100" height="100" fill="${this.color}"/>
        <text x="150" y="125 font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

// triangle class with polygon coordinates from SVG website
class Triangle extends Shape {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,200 150,10 290,200" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }

};

//export our child classes
module.exports = {Circle, Square, Triangle};
