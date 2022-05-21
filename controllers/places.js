const router = require('express').Router()

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: '',
    pic: '/images/img.jpeg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: '',
    pic: '/images/img2_2.jpeg'
  }]
  


router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

module.exports = router
