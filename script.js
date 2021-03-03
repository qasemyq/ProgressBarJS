//
const bar = document.querySelector('.bar');
const success = document.querySelector('.success') 
const counter = document.querySelector('.counter  ') 
let width = 1; 

function start () {
    setInterval(function (){
        if( width >= 100){
            success.innerHTML = "Download Success"
            clearInterval();
        }else {
            width++;
            bar.style.width = width + "%"
            counter.innerHTML = width + "%"
        }
    },10);
}
