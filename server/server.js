const express = require('express');
const cookieParser = require('cookie-parser');
const redirect = require('./redirect_middleware');

const app = express();

app.use(cookieParser());
app.use(redirect);
app.use(express.static('build'));

app.listen(3000);
