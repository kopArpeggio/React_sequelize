const express = require('express')
const { postdetail, CreateComment, DeleteComment } = require('../controllers/PostsController')
const router = express.Router()
const { Users } = require('../models')
const { Register, Login } = require('../controllers/UsersController')

router.get("/", async (req, res) => {
    const users = await Users.findAll()
    res.json(student)
})

router.post('/login', Login)

router.post("/", Register)
module.exports = router

