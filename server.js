const app = require('./server/config/express');

require('dotenv').config();

app.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}`);
});
