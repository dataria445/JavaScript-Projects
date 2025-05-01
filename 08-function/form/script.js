const users = [
  // {
  //     name: "John Doe",
  //     email: "john@example.com",
  //     phone: "(123) 456-7890",
  //     gender: "Male"
  // },

];

let displayUser=()=>{

let tableRow=''
users.forEach((item,index)=>{
  tableRow+=`<tr>   
                    <td>${index+1}</td>  
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.gender}</td>
                    <td>${item.dob}</td>
                   <td><button class="delete-btn" data-index="${index}">Delete</button>
      </td>
                </tr>`

})

let tbodyElement=document.querySelector("table tbody")
tbodyElement.innerHTML=tableRow
}

displayUser()

let userForm=document.querySelector('#userForm')
userForm.addEventListener("submit",(e)=>{
e.preventDefault()
   let obj={
    name:e.target.name.value,
    email:e.target.email.value,
    phone:e.target.phone.value,
    gender:e.target.gender.value,
    dob:e.target.dob.value
    
  }
  users.push(obj)
  displayUser()
  e.target.reset()
  alert('User added successfully!');

})

let deleteUser = (index) => {
  console.log(deleteUser);
  
  if (confirm('Are you sure you want to delete this user?')) {
    users.splice(index, 1); 
    displayUser(); 
  }
}

document.querySelector('table').addEventListener('click', (e) => {
  if (e.target.tagName=="BUTTON") {
    const index = e.target.getAttribute('data-index');
    console.log(index);
    
    deleteUser(index);
  }
});


// (e.target.tagName=="BUTTON")

// (e.target.classList.contains('delete-btn')