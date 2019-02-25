function router(event) {
    if (event) {
        event.preventDefault();
    }

    let page = location.hash.split('=')[1];

    if (page && page.indexOf('&') !== -1) {
        page = page.split('&')[0];
    }

    if (page && page.indexOf('/') !== -1) {
        page = page.split('/')[0];
    }

    if (!JSON.parse(localStorage.getItem('users')) && page !== 'login' && page !== undefined) {
        location.replace('#page=login');
        return;
    }

    switch (page) {
        case 'home': homeController();
            break;
        case 'login': loginController();
            break;
        case 'details': detailsController();
            break;
        default: loginController();
            break;
    }
}
$(window).on('hashchange', router);
router();