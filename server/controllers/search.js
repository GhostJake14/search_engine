
const { elastic, client } = require('../config/elastic');

exports.searchEngine = function (req, res) {

    var data = {
        title: req.query.title,
        genre: req.query.genre,
        country: req.query.country,
        language: req.query.language,
        sort: req.query.sort,
        order: req.query.order,
        page: req.query.page
    }
    var must = [];
    var sort = [];
    var filter = [];
    var body = {
        size: 20,
        from: 20 * (data.page - 1),
        query: {
            bool: {
                must: must,
                filter: filter
            }
        },
        sort: sort
    }

    //search by title
    if (data.title != '') {
        console.log(`search by title`);
        var word = data.title.toLowerCase().trim().split(' ');
        var i = 0;
        while (word.length - i > 1) {
            if (word[i] == '') {
                i++;
                continue;
            }
            must.push({ match: { title: word[i++] } });
        }
        must.push({ regexp: { title: word[i] + '.*' } });
    }
    else {
        must.push({ match_all: {} });
    }

    //filter by genre
    if (data.genre != '') {
        console.log(`filter by genre`);
        filter.push({ match: { genre: data.genre.toLowerCase() } });
    }

    //filter by country
    if (data.country != '') {
        console.log(`filter by country`);
        filter.push({ match: { country: data.country.toLowerCase() } });
    }

    //filter by language
    if (data.language != '') {
        console.log(`fliter by language`);
        filter.push({ match: { language: data.language.toLowerCase() } });
    }

    // sort by date or duration asc or desc
    if (data.sort != '') {
        if (data.sort == 'date') {
            console.log(`Sort by released date`);
            sort.push({ released_date: data.order });
        }
        else {
            console.log(`Sort by duration`);
            sort.push({ duration: data.order });
        }
        console.log(`in ${data.order}ending order`);
    }

    function search(index, body) {
        return client.search({ index: index, body: body });
    };

    search("sample", body).then(data => { return res.send(data.body.hits); })
}

