var express = require('express');
var app = express();

app.get('/:number', function(req, res) {
  var number = parseInt(req.params.number);
  console.log(number);
  var max;
  var min;
  var remains;
  if (typeof(number) == 'number' && !isNaN(number)) {
    max = 0;
    min = 10;
    number = Math.abs(number);
    while (number > 0) {
      remains = number % 10;
      if (remains > max) {
        max = remains;
      }
      if (remains < min) {
        min = remains;
      }
      number = (number - remains) / 10;
    }
    res.send('Наименьшая цифра числа=' + min + ' Наибольшая цифра числа=' + max);
  }
  else {
    res.send('На обработку поступило не число');
  }
});
app.listen(3000);