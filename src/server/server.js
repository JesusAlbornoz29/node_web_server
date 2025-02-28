const express = require("express");
const path = require("path");

const startServer = (option) => {
    const { port, public_path = `public` } = option;

    const app = express()

    // Vamos a utilizar un middleware para usarlos se usa .use Propio de express
    app.use(express.static(public_path)) // Contenido estatico que ponemos disponible

    app.get(`*`, (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })



}

module.exports = {
    startServer
}