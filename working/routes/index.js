var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async (req, res)=>{
  const createdDB = await userModel.create({
    username: "Nasir Ali",
    name: "Shanu", 
    age: 22
  });
    res.send(createdDB)
});

module.exports = router;
