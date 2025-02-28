const { envs } = require(`./config/env`)
const { startServer } = require(`./server/server`)

const main = () => {  
    startServer({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH
    })
}


// Funcion agnostica autoconvocada
// Agnostica por que no tiene nombre
// Autoconvocada por que la ejecutamos a si misma /*APREDERLO*/
( async () => {
    main()
}) () 