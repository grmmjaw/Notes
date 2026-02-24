const container = document.getElementById("container");
const dateContainer = document.querySelector("#dateContainer");
const addBtn = document.querySelector("#addButton");
const closeBtn = document.querySelector("#closeButton");
const note = document.querySelector("#noteContent");
const noteArea = document.querySelector("#noteArea");


addBtn.addEventListener("click", addNewNote);
closeBtn.addEventListener("click", closeNote)

function addNewNote(){
   const newNote = document.createElement("div"); 
   console.log ("newnote");
   newNote.classList.add("newNoter");
   container.appendChild(newNote)
};
function closeNote(){

}
// two ways to go about this, create a one by one for the class lists and get a function to make it all load up 
// redesign note architectire 
