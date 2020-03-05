const db = require('./../db');



const getUserById = async (req, res, next) => {
    try {
        let {userId} = req. params;
        let user = await db.one("SELECT * FROM users WHERE id=$1", userId);
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: user
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}

const deleteUser = async (req, res, next) => {
    try {
        let {userId} = req.params.id;
        let user = ("DELETE FROM users WHERE id=$1 RETURNING *", userId)
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: user
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}

const editUser = async (req, res, next) => {
    try {
        let {firstName, lastName, userName, password, email, userPic} = req.body;
        let {userId} = req. params;
        let user = await db.one("UPDATE posts SET firstName=$1, lastName=$2, userName=$3, password=$4, email=$5, userPic=$6 WHERE =$7 RETURNING *", [firstName, lastName, userName, password, email, userPic, userId])
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: user
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}

const createUser = async (req, res, next) => {
    try {
        let user = await db.one("INSERT INTO users (firstName, lastName, userName, email, password, user_pic ) VALUES (${firstName}, ${lastName}, ${userName}, ${email}, ${password}, ${user_pic}) RETURNING *", req.body)
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: user
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}

export {getUserById, deleteUser, editUser, createUser}