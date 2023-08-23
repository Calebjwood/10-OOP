class Triangle{
   constructor(){
    this.color = ''
   }
   setColor(color){
    this.color = color
   }
   render(){return `<polygon points="150, 10 244, 162 56, 162" fill="${this.color}" />`}
}
    

module.exports = Triangle