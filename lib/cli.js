const inquirer = require('inquirer');
const fs = require('fs');
const createDocument = require('./document')
class CLI {
    constructor(){
        this.shape = '';
        this.color = '';
        this.text = '';
    }
    run(){
        inquirer  
        .prompt(
                {
                    type: 'input',
                    name: 'color',
                    message: 'What color do you want your logo?(key word or hex num)',
                    
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
                    message: 'What text do you want on your logo?(3 char max)'
                },
               
                   )
                .then((res) => console.log(createDocument(res.color)))
 }}


 module.exports = CLI;