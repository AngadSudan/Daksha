 const verifyJWT = (req, res, next) => {
    const token= req.cookies?.uid 

    if(!token){
        throw new Error('Unauthorized request');
    }else{
        next();
    }
}

module.exports={verifyJWT}