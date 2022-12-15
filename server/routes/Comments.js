const express = require('express')
const { postdetail, CreateComment, DeleteComment } = require('../controllers/CommentsController')
const router = express.Router()
const { Comments } = require('../models')

const{validateToken} = require ('../middlewares/AuthMiddleware')

router.get("/:postId",postdetail)

router.post("/", validateToken, CreateComment)

router.post("/del/:id", DeleteComment)

module.exports = router