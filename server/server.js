const express = require('express')
const app = express()
const connection = require('../database/index.js')


connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

app.get('/test', (req, response) => {
  connection.query('SELECT * FROM SERVERPRACTICE.FOODS;', (err, foods, fields) => {
    console.log(foods)
    response.send(`the food is ${foods[0].name} the price is ${foods[0].price}`)
  })
})
 
app.listen(4321, console.log("serverlive"))

