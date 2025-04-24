let img1element=document.getElementById('img1')
let img2element=document.getElementById('img2')
console.log(img1element,img2element);

function swapImg(){
    let imageFirst=img1element.src
    let imageSecond=img2element.src
 img1element.src=imageSecond
 img2element.src=imageFirst
}