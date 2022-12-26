const express = require('express');
const app = express();
const PORT = 8080;
const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);



app.listen(PORT, () => {
    console.log(process.env.DATABASE_HOST)
    console.log('Приложение запустилось')
});