const container = document.querySelector("#container");
const dateContainer = document.querySelector("#dateContainer");
const addBtn = document.querySelector("#addButton");
const closeBtn = document.querySelector("#closeButton");
const note = document.querySelector("#noteContent");
const noteArea = document.querySelector("#noteArea");


addBtn.addEventListener("click", addNewNote);
closeBtn.addEventListener("click", closeNote)

function addNewNote(){
   const newNote = document.createElement("div") 
   console.log ("newnote");
   newNote.cla
   document.body.appendChild(newNote)
};
function closeNote(){

}