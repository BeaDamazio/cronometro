var sec= 0
var min= 0
var hora= 0
var interval

function clicou(){
   interval= setInterval(contador, 1000)
}

function pausou(){
    clearInterval(interval)
}

function parou(){
    clearInterval(interval)
    sec = 0
    min = 0
    hora = 0
    document.getElementById('contador').innerText='0:00:00'

}

function contador(){
    sec++
    if(sec ==60){
        min++
        sec=0
    }
    if(min == 60){
        hora++
        min = 0
    }
    document.getElementById('contador').innerText=hora+':'+min+':'+sec
}