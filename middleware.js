// node .\middleware.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ejs = require('ejs');

const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', 'public');
app.engine('ejs', ejs.renderFile);

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.render('main.ejs', { user: user });
});

let user = [];

function queryConnect(qs) {
  let obj = [];
  connection.query(qs, function (error, result, fileds) {
    if (error) throw error;
    obj = result;
    console.log(obj);
  });
  console.log(obj + 'obj')
  return obj;
}

user = queryConnect('select *from users')
console.log(user + 'user')

/*
connection.query('select *from users', function (error, result, fileds) {
  if (error) throw error;
  console.log(result.length);
  console.log(fileds);
  console.log(error + "/" + result + "/" + fileds);
  console.log(JSON.stringify(fileds));
  id = result;
  console.log(id);
});
*/
