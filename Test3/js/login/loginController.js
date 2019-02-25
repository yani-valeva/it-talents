function loginController() {
    $.get('js/login/login.htm').then(text => {
        $('main').html(text);

        $('#login').on('click', function (event) {
            event.preventDefault();
            const email = $('#login-email').val();

            if (!isValid(email)) {
                alert('Invalid email!');
            } else {
                let allUsers = JSON.parse(localStorage.getItem('users'));

                if (!allUsers || (allUsers && !allUsers.some(u => u.email === email))) {
                    alert('You have no registration here! Please enter your email again to do it!');
                    userStorage.addUser(email);
                    return;
                } 

                if (allUsers && allUsers.some(u => u.email === email)) {
                    location.replace('#page=home');
                }
            }
        });
    });
}

function isValid(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}