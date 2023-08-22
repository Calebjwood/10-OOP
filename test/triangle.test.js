const Triangle = require('../lib/Triangle')

describe('Triangle', () => {
    test('should return string with the circle and correct color', () => {
        const shape = new Triangle()
        shape.setColor('blue')
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
    })

})

