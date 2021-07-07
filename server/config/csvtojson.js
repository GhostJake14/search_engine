var csvtojson = module.exports = {};

const CSVToJSON = require('csvtojson');

csvtojson.getData = async function() {
    return await CSVToJSON().fromFile('./dataset/IMDb movies.csv');
}