function homeController() {

    $.get('js/home/home.htm').then(text => {
        const template = Handlebars.compile(text);
        let page = location.hash.split('=')[1].split('/')[1];
        let food = location.hash.split('=')[1].split('/')[2];
        let sort = location.hash.split('&')[1] && location.hash.split('&')[1].split('=')[1];


        if (!page) {
            page = 1;
        }

        beerStorage.getBeersList(page, food, sort).then(r => {
            $('main').html(template({ beers: r }));

            if(sort) {
                $('#link-container').hide();
            }

            if (food) {
                $('#selected').text(`Beers filtered by ${food}`);
                $('#selected').show();
                $(`.food-container input:radio[value="${food}"]`).attr('checked', true);
            }

            $(`#link-container a#page-${page}`).addClass('active');
            $('#link-container a').on('click', function (event) {
                event.preventDefault();
                let page = $(this).text();
                location.replace(`#page=home/${page}`);
            });

            $('#random-beer').on('click', function(event) {
                event.preventDefault();
                location.assign('#page=details');
            });

            $('#recommend-btn').on('click', function(event) {
                event.preventDefault();
                let foodParameter = $(this).closest('form').serialize();

                if (foodParameter.trim() !== '') {
                    location.replace(`#page=home/1/${foodParameter.replace('food=', '')}`);
                }         
            });

            $('.sort-btn').on('click', function(event) {
                event.preventDefault();
                const val = $(this).data('val');
                location.replace(`#page=home&sort=${val}`);
            });
        });
    });
}