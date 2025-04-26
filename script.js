const adduser = document.getElementById('adduser');
if(adduser) {
    adduser.addEventListener('submit' , function(e) {
        e.preventDefault();

        const fullName  = document.getElementById('username').value;
        const Email  = document.getElementById('Email').value;
        const Password  = document.getElementById('Password').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const emailExist = users.some(user => user.Email === Email);

        if(emailExist){
            alert("users email exists already!");
        } else{
            users.push({fullName, Email , Password});
            localStorage.setItem('users', JSON.stringify(users));
            alert("registration completed!");
            window.location.href = 'index.html';
        }

    });
}

const loginForm = document.getElementById('loginForm');
if(loginForm) {
    loginForm.addEventListener('submit' , function(e){
        e.preventDefault();
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Password').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const matchedUser = users.find(user => user.Email === email && user.Password === password);

        if(matchedUser){
            localStorage.setItem('loggedInUser',JSON.stringify(matchedUser));
            window.location.href = 'home.html'
        } else {
            alert('Invalid email or password!');
        }
    })
}

const welcomeUser = document.getElementById('welcomeUser');
if (welcomeUser) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        welcomeUser.textContent = `Welcome, ${loggedInUser.fullName}`;
    } else {
        window.location.href = 'index.html'; 
    }
}


function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}