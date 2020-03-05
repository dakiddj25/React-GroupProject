const db = require('./../db/')


const getHashtagById = async (req, res, next) => {
    try {
        let {hashtagId} = req. params;
        let hashtag = await db.one("SELECT * FROM hashtags WHERE id=$1", hashtagId);
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: hashtag
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

const deleteHashtag = async (req, res, next) => {
    try {
        let {hashtagId} = req.params.id;
        let hashtag = ("DELETE FROM hastags WHERE id=$1 RETURNING *", hashtagId)
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: hashtag
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



const createHashtag = async (req, res, next) => {
    try {
        let hashtag = await db.one("INSERT INTO hashtags (post_id, hashtag) VALUES (${post_id}, ${hashtag}) RETURNING *", req.body)
        res.status(200).json({
            status: "success",
            message: "created hashtag",
            payload: hashtag
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

module.exports = {getHashtagById, deleteHashtag, createHashtag}