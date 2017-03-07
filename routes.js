var router = require('./lib/router');



router.get('/', (req, res) => {
  res.end('Hello routing!');
});


router.post('/', (req, res) => {
  var data = req.body;
  if (req.headers['content-type'] === 'application/json') {
    data = JSON.parse(req.body);
    data = JSON.stringify(data, null, 2);
  }
  res.end(`Data: ${ req.body }`);
});




module.exports = router.routes;

