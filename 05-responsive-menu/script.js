let nav=document.querySelector('nav');
let micon=document.querySelector(".micon");
micon.addEventListener('click',()=>{
    nav.classList.toggle('showmenu')
    micon.classList.toggle('xa-bars')
    micon.classList.toggle('fa-xmark')
})