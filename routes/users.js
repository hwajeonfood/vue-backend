var express = require('express');
var router = express.Router();
var auth = require('../auth');
var path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/account', auth.ensureAuthenticated, function(req, res, next) {
  res.render('account', {
    title: 'Account',
    name: req.user.displayName,
    user: JSON.stringify(req.user.id)
  });
});

module.exports = router;