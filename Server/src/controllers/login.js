const usuarios = require("../utils/users")

function login (req, res) {
    const {email, password} = req.query;
    const user = usuarios.find((user) => 
    user.email === email && user.password === password)
    if (user) {
       return res.status(200).json({access:true})
    } else {
       return res.status(403).json({access:false})
    }
}

module.exports= login