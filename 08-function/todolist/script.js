const useInp=document.querySelector('#userInp');
const taskBtn=document.querySelector('#taskBtn');
const tasklist=document.querySelector('#tasklist');

taskBtn.addEventListener('click',()=>{
  const task=useInp.value
  if( task !== ''){
 const newLi=`<li>  <input type="checkbox" > ${task} <button class="deleteBtn">Delete</button>
 </li>`
 tasklist.innerHTML +=newLi
 useInp.value=''
  }
  else{
    alert("Please fill input!")
  };
    const deleteBtn=document.querySelectorAll('.deleteBtn')
    deleteBtn.forEach(btn=>{
      btn.addEventListener('click',()=>{
        btn.parentNode.remove()
      })
    })
})
