#!/user/bin/env node

const program = require('commander')

program.usage('<project-name>').parse(process.argv)

let projectName = program.args[0]

if(!projectName){
    program.help()
    return
}

go()

function go () {
    
}