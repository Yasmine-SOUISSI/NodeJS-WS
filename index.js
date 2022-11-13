console.log('test')
const yargs=require('yargs')
const noteJS = require('./note.js')

const command=yargs.argv._[0]
const name=yargs.argv.name
const date=yargs.argv.date
const numberOfPerson=yargs.argv.numberOfPerson

console.log("command",command)
console.log("name",name)
console.log("date",date)
console.log("numberOfPerson",numberOfPerson)

switch (command) {
    case 'add':
        console.log('Add note to note.json')
        noteJS.addNote(name,date,numberOfPerson)
        break;
        case 'remove':
            console.log('Remove note from note.json')
            noteJS.removeNote(name)
            break;
        case 'read':
            console.log('Read notes from note.json')

            if(name){
                noteJS.readNoteByName(name)
            }else{
                noteJS.readNote()
            }

                break;
  
    default:
        console.log(command+" doesn't exist ")
        break;
}



