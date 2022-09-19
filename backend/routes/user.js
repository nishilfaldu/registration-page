const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailAddress = req.body.emailAddress;
    const userName = req.body.userName;
    const password = req.body.password;

    const newUser = new User({firstName: firstName, 
                                        lastName: lastName, 
                                        emailAddress: emailAddress,
                                        userName: userName,
                                        password: password});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
    User.findOne({ emailAddress: req.body.emailAddress })
        .then(user => {
            console.log(user);
            res.json(user);
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;