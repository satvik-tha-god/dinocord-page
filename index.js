require('dotenv').config({
    path: 'config/.env'
});

const express = require('express');

const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.set('secretKey', 'dinocord');
app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

app.get('/', function(req, res, next) {
    res.render('index', {});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`);
});