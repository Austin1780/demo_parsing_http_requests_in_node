var router = require('./lib/router');



router.get('/', (req, res) => {
  res.end('Hello routing!');
});


router.post('/', (req, res) => {
  res.end(`Data: ${ req.body }`);
});




module.exports = router.routes;

