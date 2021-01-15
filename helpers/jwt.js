const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

function genToken(payload){
    let token = jwt.sign(payload, SECRET_KEY)
    return token
}

function cekToken(token){
    return jwt.verify(token, SECRET_KEY)
}

module.exports = {genToken, cekToken}