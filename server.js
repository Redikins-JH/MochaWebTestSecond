const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id': 1,
            'image' : 'https://placeimg.com/128/128/any',
            'name' : '정종학',
            'birthday' : '891102',
            'gender' : '남자',
            'job' : 'nop',
          },
          {
            'id': 2,
            'image' : 'https://placeimg.com/123/123/any',
            'name' : '뉴원',
            'birthday' : '891102',
            'gender' : '남자',
            'job' : 'nop',
          },
          {
            'id': 3,
            'image' : 'https://placeimg.com/121/121/any',
            'name' : '뉴뉴원',
            'birthday' : '891102',
            'gender' : '남자',
            'job' : 'nop',
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));