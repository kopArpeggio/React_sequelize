const { Posts } = require('../models')


exports.GetAllPost = async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts);
}

exports.CreatePost = async (req, res) => {
    const post = req.body
    await Posts.create(post);
    res.json(post)
}

exports.GetSinglePost = async (req, res) => {
    const id = req.params.id
    const post = await Posts.findByPk(id)
    res.json(post)
}