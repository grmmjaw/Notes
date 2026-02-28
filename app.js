const container = document.getElementById("container");
const dateContainer = document.querySelector("#dateContainer");
const addBtn = document.querySelector("#addButton");
const note = document.querySelector("#noteContent");
const noteArea = document.querySelector("#noteArea");


addBtn.addEventListener("click", addNewNote);


function addNewNote(){
   const newNote = document.createElement("div");
   newNote.textContent = ' ';
   const infoBar = document.createElement("div");
   const title = document.createElement("textarea");
   title.textContent = ' '
   title.classList.add("title")
   const closeButton = document.createElement("button");
   const newButton = document.createElement("button");
   const saveButton = document.createElement("button")
   const buttonContainer = document.createElement("div");
   const textContent = document.createElement("textarea");
   const dateContainer = document.createElement("div")
   newNote.classList.add("newNoter");
   container.appendChild(newNote);

   newNote.appendChild(infoBar);
   infoBar.classList.add("infoMetaData");
   infoBar.appendChild(dateContainer);
   dateContainer.classList.add("dateContainer")
   dateContainer.textContent = fulldate;
   
   infoBar.appendChild(buttonContainer);
   buttonContainer.classList.add("buttonContainer");


    buttonContainer.appendChild(saveButton);
   saveButton.classList.add("saveButton");
   saveButton.textContent = "save";



   newButton.classList.add("addButton");
   newButton.textContent = "add";
   newButton.addEventListener("click",addNewNote);

   buttonContainer.appendChild(closeButton);
   closeButton.classList.add("closeButton")
   closeButton.textContent = "close";
   buttonContainer.appendChild(newButton);

   closeButton.addEventListener("click", closeNote)
  

   
   
 
   newNote.appendChild(title);
   title.classList.add("textHeader");

   newNote.appendChild(textContent);
   textContent.classList.add("textContent");

   


function closeNote(){
   newNote.remove()

   
}};

const date = new Date();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const month = date.getUTCMonth() + 1;
const year = date.getFullYear(); 

var fulldate = day + "-" + month + "-"+ year + " " + "@ "+ hours + ":" + minutes;


if(10 > minutes)(

fulldate = day + "-" + month + "-"+ year + " " + hours + ":" + "0" + minutes
); 






