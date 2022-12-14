const express = require('express')
const router = express.Router()
const { Students } = require('../models')


router.get("/", async (req, res) => {
    const student = await Students.findAll()
    res.json(student)
})


module.exports = router