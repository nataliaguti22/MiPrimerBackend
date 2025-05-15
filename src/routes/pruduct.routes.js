const Router = require("express").Router();

Router.get("/create", (req, res) => {
    res.status(200).json({
        "message": "Holaaa, Bienvenido, Qué emocionante programar!!"
    }
    )
})

Router.get("/list", (req, res) => {
    res.status(200).json({
        "message": "Lista de productos"
    }
    )
})

Router.get("/id", (req, res) => {
    res.status(200).json({
        "message": "Estos son los datos de un producto"
    }
    )
})











module.exports = Router