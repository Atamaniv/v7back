const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
var cors = require('cors');
const app = express();

var pgp = require("pg-promise")(/*options*/);
//'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
var db = pgp("postgres://vbkghqxpadgjvl:4d355ea3ea1cbd387f0669c18290a79edbc57ec3fee8b3735c0d2201d9206aa2@ec2-54-221-236-144.compute-1.amazonaws.com:5432/d16dm58hklisc8");

app.use(cors());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/create_table_users', (req,res)=> {
  db.none('CREATE DATABASE $1:users', 'd16dm58hklisc8')
    .then(data => {
        console.log('successfully created');
    })
    .catch(error => {
        console.log(error);
    });  
});

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i => generatePassword(12, false) )
  // Return them as json
  res.json(passwords);
  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);