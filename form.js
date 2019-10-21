//selecting all element
let username = document.getElementById('username');
let dob = document.getElementById('dob');
let password = document.getElementById('password');
let email = document.getElementById('email');
`   `

//selecting all error element
let username_error = document.getElementById('username_error');
let dob_error = document.getElementById('dob_error');
let password_error = document.getElementById('password_error');
let email_error = document.getElementById('email_error');

// event listener
username.addEventListener('blur',nameValidate, true);
dob.addEventListener('blur', dobValidate, true);
email.addEventListener('blur', emailValidate, true);
password.addEventListener('blur', pwdValidate, true);


//function validate
function validate(){
    if(username.value === ''){
        username.style.border ='1px solid red';
        document.getElementById('username_div').style.color = 'red';
        username_error.textContent = 'Username is required';
        username.focus();
        return false;
    }
    if (username.value.length < 6){
        username.style.border ='1px solid red';
        document.getElementById('username_div').style.color ='red';
        username_error.textContent = 'Username must be at least 6 character';
        username.focus();
        return false;
    }
    if (dob.value === ''){
        dob.style.border ='1px solid red';
        document.getElementById('dob_div').style.color ='red';
        dob_error.textContent = 'Date of Birth is required';
        dob.focus();
        return false;
    }
    if (email.value === ''){
        email.style.border ='1px solid red';
        document.getElementById('email_div').style.color = 'red';
        email_error.textContent = 'Email is required';
        email.focus();
        return false;
    }
    if (password.value === ''){
        password.style.border ='1px solid red';
        document.getElementById('password_div').style.color = 'red';
        password_error.textContent = 'Password is required';
        password.focus();
        return false;
    }
    if (password.value.length < 8){
        password.style.border ='1px solid red';
        document.getElementById('password_div').style.color = 'red';
        password_error.textContent = 'Password must at least 8 character';
        password.focus();
        return false;
    }else
    alert ("The Form has been submitted!!!");
}

//even handler function
function nameValidate() {
    if (username.value != '') {
     username.style.border = '1px solid green';
     document.getElementById('username_div').style.color = 'green';
     username_error.innerHTML = '';
     return true;
    }
    if (username.value.length > 6) {
     username.style.border = '1px solid green';
     document.getElementById('username_div').style.color = 'green';
     username_error.innerHTML = '';
     return true;
  }
}
function dobValidate() {
    if (dob.value != '') {
     dob.style.border = '1px solid green';
     document.getElementById('dob_div').style.color = 'green';
     dob_error.innerHTML = '';
     return true;
    }
}
function emailValidate() {
    if (email.value != '') {
     email.style.border = '1px solid green';
     document.getElementById('email_div').style.color = 'green';
     email_error.innerHTML = '';
     return true;
    }
}
function pwdValidate() {
    if (password.value != '') {
     password.style.border = '1px solid green';
     document.getElementById('password_div').style.color = 'green';
     password_error.innerHTML = '';
     return true;
    }
    if (password.value.length > 8) {
     password.style.border = '1px solid green';
     document.getElementById('password_div').style.color = 'green';
     password_error.innerHTML = '';
     return true;
    }
};

