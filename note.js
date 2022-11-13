const fs=require('fs')
//task : optimization of addNote function
var addNote=(name,date,numberOfPerson)=>{
    var note={
        name:name,
        date:date,
        numberOfPerson:numberOfPerson
    }
    var newNotes=[...JSON.parse(fs.readFileSync("note.json")),note]
    console.log('newNotes',newNotes)
    fs.writeFileSync("note.json",JSON.stringify(newNotes))
}
var removeNote=(name)=>{
    var notes=JSON.parse(fs.readFileSync("note.json"))
    console.log('notes',notes)
    var filtredArray=notes.filter((note)=> note.name!==name)
    fs.writeFileSync("note.json",JSON.stringify(filtredArray))
}
var readNote=()=>{
    var notes=JSON.parse(fs.readFileSync("note.json"))
    console.log('notes',notes)
}
var readNoteByName=(name)=>{
    var note=JSON.parse(fs.readFileSync("note.json")).find((note)=>note.name===name)
    console.log('notes',note)
}
module.exports={
    addNote,
    removeNote,
    readNote,
    readNoteByName
    
}