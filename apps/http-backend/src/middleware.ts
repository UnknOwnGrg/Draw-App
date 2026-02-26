import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export function middleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"]; 
    if(!token) return res.status(401).send({error: "Invalid token"})
    try {
        const decoded = jwt.verify( token ,  JWT_SECRET) as JwtPayload;
    
        if(!decoded){
            return res.status(401).send({error: "Invalid token payload"})
        }
    
        req.userId = decoded._id;
        next();
    } catch (error) {
        return res.status(401).send({error : "Invalid or expired token"});   
    }
} 