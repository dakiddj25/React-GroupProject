const hashtag = require("express").Router();
const { gethashtag, gethashtagBYID, createHashtag, deletePost } = require("../../queries/hashtag");


hashtag.get("/", gethashtag);

hashtag.get("/:id", gethashtagBYID);

hashtag.post("/", createHashtag);

hashtag.delete("/:id", deletePost);


module.exports = posts;