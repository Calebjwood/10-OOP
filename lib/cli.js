const inquirer = require('inquirer');
const fs = require('fs');
const createDocument = require('./document')
const determineShape = require('./determineShape');
class CLI {
    constructor(){
        this.name = ''
        this.shape = '';
        this.color = '';
        this.text = '';
    }
    run(){
        inquirer  
        .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your projects name?'
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'What color do you want your logo to be?'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape do you want?',
                    choices: 
                    ['Triangle',
                    'Square',
                    'Circle'            
                    ]
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'What three letters do you want on your logo?'
                }
                ])
                .then((res) => {
                    this.name = res.name
                    this.shape = res.shape
                    this.color = res.color
                    this.text = res.text
                 })
                 .then(() => fs.writeFile(`./output/${this.name}.svg`,createDocument(determineShape(this.shape, this.color), this.name, this.text), (err) => 
                             err ? console.log(err) : console.log('Logo successfully created!')))
                    
        }
    }





 module.exports = CLI;