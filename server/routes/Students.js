const express = require('express')
const router = express.Router()
const { Students } = require('../models')


router.get("/", async (req, res) => {
    const student = await Students.findAll()
    res.json(student)
})

router.post("/", async (req, res) => {
    const student = await Students.create(req.body)
    res.json(student)
})


module.exports = router