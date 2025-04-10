let arrow=document.getElementById('arrow')
window.addEventListener("scroll",()=>{
if(window.scrollY >=100){
arrow.style.display="block"
}else{
arrow.style.display="none"
}

})