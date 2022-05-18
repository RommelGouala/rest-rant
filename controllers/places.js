const router = require('express').Router()




router.get('/', (req, res) => {
    res.render('palces/index', { places })
})

module.exports = router
