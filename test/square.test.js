const Square = require('../lib/Square')

describe('Square', () => {
    test('should return string with the circle and correct color', () => {
        const shape = new Square()
        shape.setColor('green')
        expect(shape.render()).toEqual(`<rect x="80" y="30" width="150" height="150" fill="green"/>`)
    })

})