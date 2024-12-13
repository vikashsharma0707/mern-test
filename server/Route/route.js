const express = require("express");
const route = express.Router()

const empcontroller = require("../controller/userController")

route.post("/saveData",empcontroller.usersave)
route.get("/userDisplay",empcontroller.userdiasplay)
route.post("/userSearch",empcontroller.usersearch)
route.post("/userDataDelete",empcontroller.userdataDelete)
route.post("/userEdit",empcontroller.userdataEdit)
route.post("/userEditsave",empcontroller.userdataEditsave)

module.exports = route;