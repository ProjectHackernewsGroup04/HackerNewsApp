let express = require('express');
let app = express();
let bodyParser = require('body-parser');
var path = require('path');
let frontendRouter = require('./routes/router');
let portNumber = 3000;
let server = require('http').createServer(app)

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/', frontendRouter);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

server.listen(process.env.PORT || portNumber);
console.log('listening on port ' + process.env.PORT + ' or just ' + portNumber);
module.exports = app;
