/* import {con} from './db/atlas.js'

let db = await con(); 
console.log(db);  */
import dotenv from 'dotenv';
import express from 'express';
import appCliente from './routers/cliente.js';
import appAlquiler from './routers/alquiler.js';
import appSucursal from './routers/sucursal.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use("/cliente", appCliente);
app.use("/alquiler", appAlquiler);
app.use("/sucursal", appSucursal);

const config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})

