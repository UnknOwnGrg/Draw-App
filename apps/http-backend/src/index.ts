import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types"


const app = express();

app.post("/signup", (req, res ) => {
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message: "Incorrect inputs"
        })
    }
    res.json({
        user : data
    })

});

app.post("/signin", (req, res) => {
    
    const data = SigninSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message: "Incorrect inputs"
        })
    }

    const _id = 1;
    const token = jwt.sign({
        _id
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room",middleware, (req, res) => {
    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            msg: "Incorrect Credentials"
        })

        return
    }

    res.json({
        roomId : 123
    })
});


app.listen(3001,()=> console.log("Server is connected to port 3000"))