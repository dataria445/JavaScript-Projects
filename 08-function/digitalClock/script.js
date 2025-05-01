let digitalClock=()=>{
let date=new Date();
let currentHour=date.getHours()>12 ? date.getHours()-12 : date.getHours();
let currentMin=date.getMinutes()
let currentSec=date.getSeconds()
let type=date.getHours()>12 ? "PM" :"AM"
let final=` ${currentHour<10 ? "0" +currentHour :currentHour }:${currentMin<10 ? "0"+currentMin:currentMin }:${currentSec<10 ? "0"+currentSec:currentSec } ${type}`
time.innerHTML=final

}
// digitalClock()
// setInterval(digitalClock,1000)