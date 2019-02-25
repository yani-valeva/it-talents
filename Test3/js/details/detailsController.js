function detailsController() {
    let id = location.hash.split('=')[1].split('/')[1];
    beerStorage.loadDetails(id).then(d => {
        $.get('js/details/details.htm').then(text => {
            const template = Handlebars.compile(text);
            $('main').html(template({ d: d[0] }));
        });
    });
}