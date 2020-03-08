const db = require('./../db')

const getPosts = async (req, res, next) => {
    try {
        let posts = await db.any("SELECT * FROM posts");
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: posts
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

const getAllUsersPosts = async (req, res, next) => {
    try{
        let posts = await db.any("SELECT * FROM posts INNERJOIN users ON posts.poster_id=users.id");
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: posts
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

const getPostByID = async (req, res, next) => {
    try {
        let {postId} = req. params.id;
        let post = await db.one("SELECT * FROM posts WHERE id=$1", postId);
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: post
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

const deletePost = async (req, res, next) => {
    try {
        let {tId} = req.params.id;
        let post = ("DELETE FROM posts WHERE id=$1 RETURNING *", postId)
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: post
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

const editPost = async (req, res, next) => {
    try {
        let {pictures, caption} = req.body;
        let {userId} = req. params;
        let post = await db.one("UPDATE posts SET pictures=$1, caption=$2  WHERE =$3", [pictures, caption, userId])
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: post
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

// const createPost = async (req, res, next) => {
//     try {
//         let {users_id, pictures, caption} = req.body;
//         let post = awat db.one("INSERT INTO posts ()")
//     }
// }

module.exports = {getPosts, getPostByID, deletePost, editPost}