const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post("/admin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await User.findOne({ username })
        if (!admin) {
            res.status(404).send({ message: "admin not found" })
        }
        if(username.password !== admin.password){
            res.status(401).send({message:"failed to login as admin"})
        }
        const token =jwt.sign({id:admin._id,username:admin.username,role:admin.role})

    }
    catch (error) {
        console.error("failed to login as Admin", error)
        res.status(401).send({ message: "failed to login as Admin" })
    }
})

module.exports = router;