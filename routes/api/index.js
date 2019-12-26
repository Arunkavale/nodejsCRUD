var router = require('express').Router();
router.use('/api/v1/user', require('./user'));


module.exports = router;