var userStorage = (function () {

    let users = [];

    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    }

    class User {
        constructor(email) {
            this.email = email;
        }
    }

    return {
        login: (email) => {
            const user = users.find(u => u.email === email)

            if (user) {
                return user;
            } else {
                return null;
            }
        },

        addUser: (email) => {
            let currentUser = new User(email);
            users.push(currentUser);
            localStorage.setItem('users', JSON.stringify(users));           
        }
    }
})();