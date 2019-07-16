const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/angular-material-table'));

app.listen(3000, () => console.log("Listening on port 3000"));
