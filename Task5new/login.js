const loginform=document.querySelector('#loginform');


loginform.addEventListener('submit', (e) => {
    if (!loginvalidate()) {
        e.preventDefault();
        console.log("Login validation failed");
    } 
});


function loginvalidate() {
    var emailin = document.getElementById('email');
    var passwordin = document.getElementById('password');
    var errormessage = document.getElementById('errormessage');
    var storeduserdata = JSON.parse(localStorage.getItem("user"));

    if (storeduserdata && storeduserdata.emailval === emailin.value && storeduserdata.passval === passwordin.value) {
        alert("Login successful!");
        window.location.href = "apipage.html";
        console.log('success login')
        return true;
    } else {
        errormessage.innerText = "Invalid email or password. Please try again.";
        return false;
    }
}