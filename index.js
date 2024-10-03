// const { log } = require('console');
const express = require('express');
const app = express();
const port = 5000 //variável ambiente
const router = express.Router();

const path = require("path");


const basepath = path.join(__dirname);

app.use('/sobre', (req, res) => {
    res.sendFile(`${basepath}/sobre.html`)

})

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`);

});

app.listen(port, () => {
    console.log(`App não explodiu "ainda"!\nPorta: ${port}`)
});


const checkAuth = function (req, res, next) { //autentificação de usuário
    req.authStatus = true;
    if (req.authStatus) {
        console.log("Usuário logado");
    } else {
        console.log("SUS!")
    }
    router.use(checkAuth);
};
