let micon=document.querySelector('.micon');
let nav=document.querySelector("nav");
micon.addEventListener('click',()=>{
    nav.classList.toggle('showmenu')
    micon.classList.toggle('xa-bars')
    micon.classList.toggle('fa-xmark')
})