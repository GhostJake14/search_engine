const app = require('./server/config/express');

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

require('dotenv').config();

app.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}`);
});
