const express = require('express')
const router = express.Router();
const {User} = require('../models/user');
const jwt = require('jsonwebtoken')

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
      if(error){
        console.log("Error: "+ error)
      }
      else{
          let payload = {subject :registeredUser._id }
          let token = jwt.sign (payload,'mysecret')
        res.status(200).send({token})
      }
    })
  })
  router.post('/login', (req, res) => {
    let userData = req.body
  
    User.findOne({Username: userData.Username}, (error, user)=> {
      if(error){
        console.log("Error: "+ error)
      }
      else {
            if (!user){
            res.status(401).send("Invalid Username")
           }
  
        else if(user.Password !== userData.Password){
          res. status(401).send("Invalid Password")
        }
        else if(user.Email !== userData.Email){
          res.status(401).send("invalid email")
        }
  
      else{
        let payload = {subject:user._id}
        let token = jwt.sign(payload,'mysrect')
      res.status(200).send({token})
      }
    }
    })
  })

  function verifyToken(req, res, next){
    if(!req.headers.authorization){
      return res.status(401).send("Unauthorized Request")
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
      return res.status(401).send("Unauthorized Request")
    }
    let payload = jwt.verify(token,'mysrect')
    if(!payload){
      return res.status(401).send("Unauthorized Request")
    }
    
    req.userId = payload.subject
    next()
    }
    router.get('/dashboard',verifyToken,(req,res)=>{
      let dashboard =[
        {
          "_id" : "1",
          "name": "Welcome to Project",
        
        }
      ]
      res.json(dashboard)
    })
    
//   router.post('/', async (req,res)=>{
//     let user = new User({
//         username: req.body.username,
//         password: req.body.password,
//     })
//     user = await user.save();

//     if(!user)
//     return res.status(400).send('the category cannot be created!')

//     res.send(user);
// })

router.get('/get/count', async (req, res) =>{
  const userCount = await User.countDocuments((count) => count)

  if(!userCount) {
      res.status(500).json({success: false})
  } 
  res.send({
      userCount: userCount
  });
})


module.exports = router