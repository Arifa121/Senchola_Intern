let success = true;
const signform = document.querySelector('#siginform');

signform.addEventListener('submit', (e) => {
    if (!validate()) {
        e.preventDefault();
    } else {
        alert("Sign in successful. You can log in now.");
        window.location.href = "login.html";
    }
});

function validate() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');

    if (password.value.length < 8) {
        alert("Password must be at least 8 characters");
        success = false;
    }
    if (password.value !== cpassword.value) {
        alert("Passwords should match");
        success = false;
    }
    if (success) {
        var userdata = {
            emailval: email.value,
            passval: password.value
        }
        localStorage.setItem("user", JSON.stringify(userdata));
        console.log("Sign in successful. Redirecting to login page.");
        window.location.href = "login.html";
    }
    return success;
}

// loginform.addEventListener('submit',(e)=>{
//     if(!loginvalidate()){
//         e.preventDefault();
//     }
//     else{
//         window.location.href = "apipage.html";
//     }
// })

