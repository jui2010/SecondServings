const router = require('express').Router()
let User = require('../models/userModel')

//get details of a single user, using their username 
router.route('/:username').get((req, res) => {
    User.find({username : req.params.username})
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ error : err}))
})

module.exports = router