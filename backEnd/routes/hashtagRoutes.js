const hashtag = require("express").Router();
const { getHashtagById, createHashtag, deleteHashtag } = require("../queries/hashtags");


hashtag.get("/:id", getHashtagById);

hashtag.post("/", createHashtag);

hashtag.delete("/:id", deleteHashtag);


module.exports = hashtag;