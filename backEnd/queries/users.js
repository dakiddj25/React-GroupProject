const db = require('../db/index');



const getSingleUser = async (req, res, next) => {
    try {
        let userId = req.params.id;
        let user = await db.one(`SELECT * FROM users WHERE id=${userId}`);
        res.status(200).json({
            status: "success",
            message: "single user",
            payload: user
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Couldn't get User",
            payload: err
        })
        next()
    }
}

const getUser = async (req, res, next) => {
    try{
        let user = await db.one("SELECT * FROM users WHERE username = $1", req.params.username);
        if (!user) {
            res.status(404).json({
                message: "User doesn't exist!"
            })
        } else if (user.password !== req.body.password) {
            res.status(401).json({
                message: "Password is incorrect!"
            })
        } else {
            res.status(200).json({
                user, 
                status: "success",
                message: "USER"
            })
        }
    } catch (err){
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        let {userId} = req.params.id;
        let user = ("DELETE FROM users WHERE id=$1 RETURNING *", userId)
        res.status(200).json({
            status: "success",
            message: " user deleted",
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
        let {userId} = req. params.id;
        let user = await db.one("UPDATE users SET firstName=$1, lastName=$2, userName=$3, email=$4, password=$5, userPic=$6 WHERE =$7 RETURNING *", [firstName, lastName, userName, email, password,user_pic, userId])
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
        let user = await db.none(
            `INSERT INTO users (firstName, lastName, userName, email, password, user_pic) VALUES('${req.body.firstName}', '${req.body.lastName}', '${req.body.userName}', '${req.body.email}', '${req.body.password}', '${req.body.user_pic}')`)
        res.status(200).json({
            status: "success",
            message: "added user posts",
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

module.exports = {getSingleUser, getUser, deleteUser, editUser, createUser}