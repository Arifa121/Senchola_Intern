const form=document.querySelector('#form')
const username=document.querySelector('#username')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
const email=document.querySelector('#email')
let success=true

form.addEventListener('submit',(e)=>{  
    if(!validateinputs()){
        e.preventDefault();
    }
})
function validateinputs(){
    const usernameval=username.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    
    if(usernameval===''){
        success=false
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailval===''){
        success=false
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailval)){
        success=false
         setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordval===''){
        success=false
        setError(password,'Password is required')
    }
    else if(passwordval.length<8){
        success=false
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }
    
    if(cpasswordval===''){
        success=false
        setError(cpassword,'Confirm Password is required')
    }
    else if(cpasswordval!==passwordval){
        success=false
        setError(cpassword,'Password doesnt match')
    }
    else{
        setSuccess(cpassword)
    }
   return success
}
//element - password
//msg - pwd is required
function setError(element,message){
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error')

    errorelement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}

function setSuccess(element){
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error')

    errorelement.innerText='';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}

const validateEmail=(email)=>{
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
}