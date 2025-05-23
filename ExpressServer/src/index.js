const express = require('express');
const rotaUsuario = require('./rotas/usuario.rota');
const rotaPost = require('./rotas/post.rota');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/usuarios', rotaUsuario);
app.use('/posts', rotaPost);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080');
});