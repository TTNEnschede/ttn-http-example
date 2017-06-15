const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var index = require('./routes/index');
var integration = require('./routes/integration');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/integration/', integration);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
