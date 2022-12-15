const express = require('express')
const { GetAllPost, CreatePost, GetSinglePost } = require('../controllers/PostsController')
const router = express.Router()

router.get('/', GetAllPost)

router.post("/", CreatePost)

router.get("/byId/:id", GetSinglePost)

module.exports = router