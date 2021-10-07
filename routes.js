const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('./controllers/registerController');
const {login} = require('./controllers/loginController');
const {getUser} = require('./controllers/getUserController');
const {profileupdate} = require('./controllers/profileUpdateController');

router.post('/register', [
    body('name',"The name must be of minimum 3 characters length")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 3 }),
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], register);


router.post('/profileupdate', [
    body('name',"The name must be of minimum 3 characters length").notEmpty().escape().trim() .isLength({ min: 3 }),
    body('company',"Invalid company name").notEmpty().escape().trim().isLength({ min: 3 }),
    body('userimage',"Invalid image url").notEmpty().escape().trim().isLength({ min: 3 }),
    body('logo',"Invalid company logo url").notEmpty().escape().trim().isLength({ min: 3 }),
    body('website',"Invalid website").notEmpty().trim().isLength({ min: 4 })
    
], profileupdate);


router.post('/login',[
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters iiii length").notEmpty().trim().isLength({ min: 4 }),
],login);

router.get('/getuser',getUser);

module.exports = router;