const container = document.getElementById("container");
const dateContainer = document.querySelector("#dateContainer");
const addBtn = document.querySelector("#addButton");
const note = document.querySelector("#noteContent");
const noteArea = document.querySelector("#noteArea");


addBtn.addEventListener("click", addNewNote);
closeBtn.addEventListener("click", closeNote)

function addNewNote(){
   const newNote = document.createElement("div");
   const infoBar = document.createElement("div");
   const title = document.createElement("textarea");
   const closeButton = document.createElement("button");
   const newButton = document.createElement("button");
   const buttonContainer = document.createElement("div");
   const textContent = document.createElement("textarea");
   const texts = document.createElement("p")
   newNote.classList.add("newNoter");
   container.appendChild(newNote);

   newNote.appendChild(infoBar);
   infoBar.classList.add("infoMetaData");
   

   newNote.appendChild(title);
   title.classList.add("textHeader");

   newNote.appendChild(textContent);
   textContent.classList.add("textContent");

   infoBar.appendChild(buttonContainer);
   buttonContainer.classList.add("buttonContainer");


   buttonContainer.appendChild(closeButton);
   closeButton.classList.add("closeButton")
   closeButton.textContent = "close";
   buttonContainer.appendChild(newButton);
   newButton.classList.add("addButton");
   newButton.textContent = "add";
   newButton.addEventListener("click",addNewNote);
};
function closeNote(){
   
}
// two ways to go about this, create a one by one for the class lists and get a function to make it all load up 
// redesign note architectire 
