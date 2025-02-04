const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./user.model');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY

router.post("/admin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await User.findOne({ username })
        if (!admin) {
            res.status(404).send({ message: "admin not found" })
        }
        if (admin.password !== password) {
            res.status(401).send({ message: "failed to login as admin" })
        }
        const token = jwt.sign(
            { id: admin._id, username: admin.username, role: admin.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        )
        return res.status(200).json({
            message: "Authentication Successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role

            }
        })

    }
    catch (error) {
        console.error("failed to login as Admin", error)
        res.status(401).send({ message: "failed to login as Admin" })
    }
})

module.exports = router;