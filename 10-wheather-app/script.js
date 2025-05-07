let weatherApp=document.querySelector('.weather-app');
let weatherDisplay=document.querySelector('#response');
weatherDisplay.style.display="none"
weatherApp.addEventListener("submit",async(event)=>{
    let cityName=event.target.cityNamename.value.trim()
         event.preventDefault()
         let fetchData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`)
         let finalData= await fetchData.json()
         weatherDisplay.style.display="block"
         weatherDisplay.innerHTML+=`
         
            <img src="https://api.openweathermap.org//img/w/${finalData.weather[0].icon}.png" alt="Weather Icon" class="weather-icon">
            <div class="temperature">${finalData.main.temp}</div>
            <div class="city">${finalData.sys.cityName}</div>
            
            <div class="details">
                <div class="detail-item">
                    <img src="https://api.openweathermap.org//img/w/${finalData.weather[0].icon}.png" alt="Humidity" class="detail-icon">
                    <div class="detail-value">78%</div>
                    <div class="detail-label">Humidity</div>
                </div>
                <div class="detail-item">
                    <img src="https://api.openweathermap.org//img/w/${finalData.weather[0].icon}.png" alt="Wind" class="detail-icon">
                    <div class="detail-value">12 km/h</div>
                    <div class="detail-label">Wind</div>
                </div>
                <div class="detail-item">
                    <img src="https://api.openweathermap.org//img/w/${finalData.weather[0].icon}.png" alt="Pressure" class="detail-icon">
                    <div class="detail-value">1012 hPa</div>
                    <div class="detail-label">Pressure</div>
                </div>
            </div>
           `
})


 // API configuration
 const apiKey = '4d8fb5b93d4af21d66a2948710284366&units'; // Replace with your actual API key
 const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric';
 

