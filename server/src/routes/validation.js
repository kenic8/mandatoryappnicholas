import jwt from "jsonwebtoken";

function Verify (req,res,next){
const token = req.headers.authorization
console.log(req.headers.authorization)
if (!token) {
    return res.status(400).send('login to gain acesss')
}
try {
    const verify = jwt.verify(token,process.env.TOKEN_S)
    req.headers.authorization = verify
    console.log(verify)
    //res.status(200).send(req.body)
    next(req.body)
} catch (error) {
    return res.status(400).send('something went wrong')
}

}
export default Verify