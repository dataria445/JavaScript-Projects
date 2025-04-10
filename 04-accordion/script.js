const quest=document.querySelectorAll('.faq-quest')
quest.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        const currentAns=item.nextElementSibling
        const allAns=document.querySelectorAll('.faq-ans');
        for (let i = 0; i < allAns.length; i++) {
            if(allAns[i] != currentAns){
           allAns[i].classList.remove('active')
            }
        }
        currentAns.classList.toggle('active')
    })
})