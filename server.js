const app = require('./server/config/express');

require('dotenv').config();

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
