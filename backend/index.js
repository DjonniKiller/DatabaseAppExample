const express = require('express');
const pack = require('node-pack');
const bp = require('body-parser');
const app = express();
const PORT = 8080;
const apiRoutes = require('./routes/api');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(process.env.DATABASE_HOST);
    console.log('Приложение запустилось');
});