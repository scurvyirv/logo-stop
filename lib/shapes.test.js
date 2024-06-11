//import shapes classes
const { Circle, Square, Triangle } = require('./shapes.js');

//create a testing suite for different extensions of shape class
//circle instance
describe('Circle', () => {
    describe('setColor', () => {
        it('should determine the shape fill color', () => {
            const circle = new Circle();
            circle.setColor('yellow');
            expect(circle.color).toEqual(`yellow`)
        })
    });
    describe('setText', () => {
        it('should determine the three characters (this.text) to be placed within the logo', () => {
            const circle = new Circle();
            circle.setText('NOT')
            expect(circle.text).toEqual('NOT');
        })
    });
    describe('setTextColor', () => {
        it('should determine color of text (this.textColor) within the logo', () => {
            const circle = new Circle();
            circle.setTextColor('purple')
            expect(circle.textColor).toEqual(`purple`)
        })
    })
});

//square instance
describe('Square', () => {
    describe('setColor', () => {
        it('should determine the shape fill color', () => {
            const square = new Square();
            square.setColor('yellow');
            expect(square.color).toEqual(`yellow`)
        })
    });
    describe('setText', () => {
        it('should determine the three characters (this.text) to be placed within the logo', () => {
            const square = new Square();
            square.setText('NOT')
            expect(square.text).toEqual('NOT');
        })
    });
    describe('setTextColor', () => {
        it('should determine color of text (this.textColor) within the logo', () => {
            const square = new Square();
            square.setTextColor('purple')
            expect(square.textColor).toEqual(`purple`)
        })
    })
});

//triangle instance
describe('Triangle', () => {
    describe('setColor', () => {
        it('should determine the shape fill color', () => {
            const triangle = new Triangle();
            triangle.setColor('yellow');
            expect(triangle.color).toEqual(`yellow`)
        })
    });
    describe('setText', () => {
        it('should determine the three characters (this.text) to be placed within the logo', () => {
            const triangle = new Triangle();
            triangle.setText('NOT')
            expect(triangle.text).toEqual('NOT');
        })
    });
    describe('setTextColor', () => {
        it('should determine color of text (this.textColor) within the logo', () => {
            const triangle = new Triangle();
            triangle.setTextColor('purple')
            expect(triangle.textColor).toEqual(`purple`)
        })
    })
});