var beerStorage = (function() {
    let beers = null;

    function getBeersList(page, food, sort) {
        if (sort) {
            return new Promise (function(resolve, reject) {        
                $.get('https://api.punkapi.com/v2/beers').then(res => {
                    beers = res;

                    beers.sort((b1, b2) => {
                        if (b1['name'] > b2['name']) {
                            return sort === 'asc' ? 1 : -1;
                        }
        
                        if (b1['name'] < b2['name']) {
                            return sort === 'asc' ? -1 : 1;
                        } 
        
                        return 0;
                    });

                    resolve(res)
                }).catch(err => reject(err));
            });
        }
 
        let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=30`;

        if (food) {
            url += `&food=${food}`;
        }

        return new Promise (function(resolve, reject) {        
            $.get(url).then(res => {
                beers = res;
                resolve(res)
            }).catch(err => reject(err));
        });
    }

    function loadDetails(id) {
        if (id) {
            return new Promise (function(resolve, reject) {
                $.get(`https://api.punkapi.com/v2/beers/${id}`).then(res => resolve(res)).catch(err => reject(err));
            }); 
        }

        return new Promise (function(resolve, reject) {
            $.get('https://api.punkapi.com/v2/beers/random').then(res => resolve(res)).catch(err => reject(err));
        });
    }

    return {
        getBeersList, loadDetails
    }
})();