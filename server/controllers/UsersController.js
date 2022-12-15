const { Users } = require('../models')
const bcrypt = require("bcrypt")
const { sign } = require('jsonwebtoken')

exports.Register = async (req, res) => {
    const { username, password } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            "username": username,
            "password": hash
        })
        res.json("Success Add User.")
    })
}

exports.Login = async (req, res) => {
    const { username, password } = req.body;
    await Users.findOne({ where: { username: username } }).then((finded) => {
        // res.json(finded)
        if (finded) {
            bcrypt.compare(password, finded.password).then((match) => {
                if (match == 0) {
                    // res.json({ error: "Wrong Username And Password Combination" })
                    res.json({ match, finded })
                } else {
                    const accessToken = sign({ username: finded.username, id: finded.id },
                        "importantsecret")
                    res.json({ match, finded , accessToken })
                }
            })
        } else {

            res.json({ finded });
        }
    });

    // if (user == 0) {
    //     res.json({ error: "User Doesn't Exist" });
    // } else {
    // bcrypt.compare(password, user.password).then((match) => {
    //     if (match == 0) {
    //         res.json({ error: "Wrong Username And Password Combination" })
    //     } else
    //         res.json("You Logged In!")
    // })
    // }


}