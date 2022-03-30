import express from 'express'

import { Menu } from './menu/index';

const app = express();
const port = 8000;
let options = '';
app.get('/', (req, res) => {
    res.send('Hola Mundo')

})

app.listen(port, () => {
    Menu(3) // cambiar aqui la opcion entre 1  a 3
    console.log(`Servidor corriendo en http://localhost:${port}`)
})