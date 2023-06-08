function register(email, password, name, surname) {
    localStorage.set('userEmail', email);
    localStorage.set('userPassword', password);
    localStorage.set('userName', name);
    localStorage.set('userSurname', surname);
}

function login(email, password) {
    const userEmail = localStorage.getItem('userEmail');
    const userPwd = localStorage.getItem('userPassword');

    if ((userPwd === password) && (userEmail === email))
        return {
            email: userEmail,
            name: localStorage.getItem('userName'),
            surname: localStorage.getItem('userSurname'),
        };
}