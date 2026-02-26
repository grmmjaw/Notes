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
   const infoBar = document.createElement("div");
   const title = document.createElement("textarea");
   const textContent = document.createElement("textarea")
   newNote.classList.add("newNoter");
   container.appendChild(newNote);

   newNote.appendChild(infoBar);
   infoBar.classList.add("infoMetaData");

   newNote.appendChild(title);
   title.classList.add("textHeader");

   newNote.appendChild(textContent);
   textContent.classList.add("textContent");

};
function closeNote(){

}
// two ways to go about this, create a one by one for the class lists and get a function to make it all load up 
// redesign note architectire 
