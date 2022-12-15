
const { Comments } = require('../models')

exports.postdetail = async (req, res) => {
    const postId = req.params.postId
    const comments = await Comments.findAll({ where: { PostId: postId } })
    res.json(comments)
}

exports.CreateComment = async (req, res) => {
    const comment = req.body
    await Comments.create(comment);
    res.json(comment)
}

exports.DeleteComment = async (req, res) => {
    const id = req.params.id
    await Comments.destroy({
        where: { id: id }
    })
    res.json(id)
}