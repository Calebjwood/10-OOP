function createDocument(shape, name, text){
    if(text.length !== 3){
        return console.log('text must be 3 character');
          
      } 
    return`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 
 
${shape}

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>

</svg>
`
}


module.exports = createDocument