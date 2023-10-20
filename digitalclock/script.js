
let ampm=document.getElementById('ampm')
function displaytime(){
    let datetime=new Date()
    let hr=datetime.getHours()
    let min=padzero(datetime.getMinutes())
    let sec=padzero(datetime.getSeconds())
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    } 
       
    document.getElementById('hours').innerHTML=padzero(hr)
    document.getElementById('mins').innerHTML=min
    document.getElementById('secs').innerHTML=sec

}

setInterval(displaytime,1000)
function padzero(num){
    return num<10?"0"+num:num
}