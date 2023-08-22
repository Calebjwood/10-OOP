const Circle = require('../lib/Circle')


describe('Circle', () => {
    test('should return string with the circle and correct color', () => {
        const shape = new Circle()
        shape.setColor('red')
        expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="red"/>`)
    })

})