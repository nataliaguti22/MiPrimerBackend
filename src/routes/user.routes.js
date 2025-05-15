const Router = require("express").Router();

Router.get("/login", (req, res) => {
    res.status(200).json({
        "message": "Intentando entrar "
    }
    )
})

module.exports = Router