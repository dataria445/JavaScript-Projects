const bollywoodMovies = [ ]

 let movieTableBody=document.querySelector("#movieTableBody")
 let displayMovies=()=>{
  let tableRow=''
  bollywoodMovies.forEach((item,index)=>{
        tableRow+=`<tr>
                <td>${index+1}</td>
                <td>${item.filmName}</td>      
                <td>${item.launchYear}</td>      
                <td>${item.sequel}</td>
                <td>${item.genre}</td> 
                <td> <button class="delete-btn" onclick="dataIndex(${index})">Delete</button></td> 
                <td> <button class="edit-btn" data-index="${index}">Edit</button></td>                
                                       
                </tr>`
  })
  movieTableBody.innerHTML=tableRow
 }
 displayMovies()

let movieForm=document.querySelector('#movieForm')
movieForm.addEventListener('submit',(e)=>{
  let oldMovies=JSON.parse(localStorage.getItem('user')) ?? []
     e.preventDefault()
    const obj={
    filmName: e.target.filmName.value,
    launchYear: e.target.launchYear.value,
    sequel: e.target.sequel.value,
    genre: e.target.genre.value,
     }
    bollywoodMovies.push(obj)
    localStorage.setItem('user',JSON.stringify(bollywoodMovies))
    displayMovies()
    e.target.reset()
})

let clearBtn=document.querySelector('#clearBtn')
clearBtn.addEventListener('click',()=>{
  localStorage.clear()
   displayMovies()
})

// let btn=document.querySelector('.delete-btn')
//   btn.addEventListener('click', (e) => {
//         console.log(e.target);
          
//   });


function dataIndex(index) {
  if (confirm('Are you sure you want to delete this movie?')) {
      bollywoodMovies.splice(index, 1);
      localStorage.setItem('user', JSON.stringify(bollywoodMovies));
      displayMovies();
  }
}
