const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, UserServices} = require('../models/models')
let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role},
    process.env.KEY, 
    {expiresIn: '72h'})
}

class userController {
    async registration(req, res, next){
        const {email, password, role} = req.body
        if (!email || !password){
            return next(ApiError.badRequest('Uncorrect email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest('User with this email already known'))
        }
        
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password, hashPassword})
        const userServices = await UserServices.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }


    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!email){
            return next(ApiError.badRequest('Uncorrect email'))
        }
        if (password != user.password){
            return next(ApiError.badRequest('Invalid  password'))
        }
        let transporter = nodemailer.createTransport(smtpTransport({
          service: 'gmail',
          host: 'smtp.gmail.com',
          auth: {
            user: 'vovademidenko5@gmail.com',
            pass: 'kolya.by'
          }
        }));
        
        let mailOptions = {
          from: 'vovademidenko5@gmail.com',
          to: `${email}`,
          subject: 'Mail Check',
          text: `Its your password: ${password}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        })
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }


    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}
module.exports = new userController()