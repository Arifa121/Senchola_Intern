const savedemail=localStorage.getItem('email')
const savedpassword=localStorage.getItem('password')
const enteremail=document.querySelector('#enteremail')
const enterpassword=document.querySelector('#enterpassword')
let success=true



form.addEventListener('submit',(e)=>{ 
    if(enteremail===savedemail && enterpassword===savedpassword){
        alert("you are successfully verified")
        window.location.href="api.html"
    }
    else{
        alert("invalid email or password")
    }
})