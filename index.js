const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express(JSON));
app.use(express.json());

app.use(cors());

app.use('/', require('./Route/router'));

app.listen(port, () => {
    console.log(`Servidor Corriendo ${port}`);
})