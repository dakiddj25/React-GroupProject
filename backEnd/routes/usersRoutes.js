const users = require("express").Router();
const { getSingleUser ,getUser, createUser, editUser, deleteUser } = require("../queries/users");



users.get("/:id", getSingleUser);

users.post("/:username", getUser); // get user by username

users.post("/", createUser); 

users.patch("/:id", editUser);

users.delete("/:id", deleteUser);


module.exports = users;

