// Get the button and container elements
const addNoteBtn = document.getElementById('add-note-btn');
const notesContainer = document.querySelector('.notes-container');

// Add click event listener to the button
addNoteBtn.addEventListener('click', () => {
  // Create the new note element
  const newNote = document.createElement('div');
  newNote.className = 'modal-header';
  newNote.innerHTML = `
    <div class="noteHeading">
      <h3>New Note</h3>
      <button class="close-btn">&times;</button>
    </div>
    <div class="notes">
      <textarea id="note-content" placeholder="Start writing..."></textarea>
    </div>
  `;
  
  // Append the new note to the container
  notesContainer.appendChild(newNote);
  
  // Add event listener to the close button
  const closeBtn = newNote.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    notesContainer.removeChild(newNote);
  });
});


// function addDiv(divName, options = {}) {
//     // Create the div element
//     const div = document.createElement('div');
    
//     // Set basic attributes
//     div.className = options.className || "main";
//     div.id = options.id || `div-${Math.round(Math.random() * 1000 + 1)}`;
//     div.setAttribute("title", options.title || "generated-div");
    
//     // Apply styles
//     div.style.backgroundColor = options.bgColor || "green";
//     div.style.padding = options.padding || "12px";
//     div.style.width = options.width || "300px";
//     div.style.height = options.height || "300px";
//     div.style.margin = options.margin || "10px";
//     div.style.borderRadius = options.borderRadius || "4px";
//     div.style.color = options.textColor || "white";
    
//     // Add text content
//     const textContent = options.text || "chai and code";
//     div.textContent = textContent;
    
//     // Append to document body or specified container
//     const container = options.container || document.body;
//     container.appendChild(div);
    
//     return div; // Return the created div for further manipulation
// }

// const newDiv = addDiv("interactive-div", {
//     bgColor: "orange",
//     text: "Click me!"
// });

// newDiv.addEventListener('click', () => {
//     newDiv.style.backgroundColor = "red";
//     newDiv.textContent = "I was clicked!";
// });