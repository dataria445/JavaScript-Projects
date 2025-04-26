let galleryParent = document.querySelector('.gallery');
let modeloverlayElement = document.querySelector('.modeloverlay');
let modeldivElement= document.querySelector('.model'); 
let modelImg= document.querySelector('.model img');
let closeBtn = document.querySelector(".model span");

galleryParent.addEventListener('click', (e) => {
 if(e.target.tagName == "IMG"){
  modeloverlayElement.classList.add('modeloverlay,modeloverlayshow')
  modeldivElement.classList.add('modelshow')
  modelImg.src = e.target.src
 }
  })

closeBtn.addEventListener('click',()=>{
  modeloverlayElement.classList.remove('modeloverlayshow')
  modeldivElement.classList.remove('modelshow')
  console.log(e);
  
})