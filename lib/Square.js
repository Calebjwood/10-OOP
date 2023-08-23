class Square {
    constructor(){
        this.color = ''
       }
       setColor(color){
        this.color = color
       }
       render(){return `<rect x="80" y="30" width="150" height="150" fill="${this.color}"/>`}
}
    
module.exports = Square