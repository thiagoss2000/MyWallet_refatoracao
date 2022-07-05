import jwt from "jsonwebtoken";

export async function validateToken (req,res,next){
 
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    if (!token) {
        return res.sendStatus(401);
    }

    let user;

    try {
        user = jwt.verify(token, process.env.JWT_SECRET);
    
        
    }catch(e){
        res.sendStatus(401);
    }
}