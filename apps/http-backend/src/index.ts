import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();

app.post("/signup", (req, res ) => {
    //db call

});

app.post("/signin", (req, res) => {
    //db call


    const _id = 1;
    const token = jwt.sign({
        _id
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room",middleware, (req, res) => {
    //db call

    res.json({
        roomId : 123
    })
});


app.listen(3001,()=> console.log("Server is connected to port 3000"))