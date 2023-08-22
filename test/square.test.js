const Square = require('../lib/Square')

describe('Square', () => {
    test('should return string with the circle and correct color', () => {
        const shape = new Square()
        shape.setColor('green')
        expect(shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="green"/>`)
    })

})