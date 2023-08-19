class Square {
    constructor(){
        this.color = ''
       }
       setColor(color){
        this.color = color
       }
       render(){return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`}
}
    
module.exports = Square