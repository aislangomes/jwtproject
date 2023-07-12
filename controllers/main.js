const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')

const login = async (req, res) => {
  const {username,password} = req.body
  if(!username || !password){
    throw new BadRequest('Username or password is invalid')
  }

  const id = new Date().getDate()
  const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})

  res.status(200).json({msg: 'User created', token})
}

const dashboard = async (req,res) =>{
  console.log(req.user)
  
  const luckNumber = Math.floor(Math.random()*100)
  
  res.status(200).json({
    msg:`Hello, ${req.user.username}`,
    secret: `Ta aqui teu numero da sorte ${luckNumber}`})
}

module.exports = {
  login,
  dashboard
}