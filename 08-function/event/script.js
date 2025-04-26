/*
let gallery=document.querySelector('.gallery')
gallery.addEventListener('click',()=>{
    console.log("clicked inside the UL")
},false)
let nature1=document.getElementById('nature1')
nature1.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("clicked inside the Nature1")
},false)

let google=document.getElementById('google')
google.addEventListener('click',(e)=>{
    console.log(`${e.target} google clicked`);
    e.preventDefault()
  })
*/

let galleryItemAll=document.querySelector('.gallery')
// galleryItemAll.addEventListener('click',(e)=>{
//     if(e.target.tagName =='IMG');{
//         console.log(e.target.class);
//             let removeit=e.target.parentNode
//     removeit.parentNode.removeChild(removeit)
//     }
// })

let galleryItem=document.querySelector('#nature3')
galleryItem.addEventListener('click',()=>{
    console.log(galleryItem.parentElement.nextElementSibling);
    console.log(galleryItem.parentElement.parentNode);
    console.log(galleryItem.parentElement.parentElement.childNodes[1]);
       
})

let btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
    // console.log(btn.childNodes);
    console.log(btn.lastElementChild);
})