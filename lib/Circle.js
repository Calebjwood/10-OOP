class Cirlce {
    constructor(){
        this.color = ''
       }
       setColor(color){
        this.color = color
       }
       render(){return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`}
}

module.exports = Cirlce