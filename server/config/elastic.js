var elastic = module.exports = {};

const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });
const csvtojson = require('./csvtojson');

elastic.checkIndex = function () {
    client.indices.exists({
        index: "sample"
    }).then(function (exists) {
        if (exists.statusCode == 200)
            console.log('Index exists');
        else
            createIndex();
    })
}

async function createIndex() {
    var movies = await csvtojson.getData();
    client.indices.create({
        index: 'sample',
        body: {
            mappings: {
                properties: {
                    title: { type: 'keyword' },
                    released_date: { type: 'date', format: 'yyyy-mm-dd || yyyy' },
                    genre: { type: 'text' },
                    duration: { type: 'integer' },
                    country: { type: 'text' },
                    director: { type: 'text' }
                }
            }
        }
    }).then(() => console.log("Index created\nIndexing items..."));
    var error = 0;
    var count = 0;
    movies.forEach(movie => {
        client.index({
            index: "sample",
            id: movie.imdb_title_id,
            type: "_doc",
            body: {
                title: movie.original_title,
                released_date: movie.date_published,
                genre: movie.genre,
                duration: movie.duration,
                country: movie.country,
                director: movie.director
            }
        }, function (err, res) {
            count++;
            if (err)
                error++;
            if (count == movies.length)
                console.log(`Successfully indexed ${movies.length - error} out of ${movies.length} items`);
        })
    });
}

module.exports = elastic;