import  express from "express";
import {pool} from "./db.js";



const app = express()



// Ruta para obtener los nombres de las tablas
app.get('/ping', (req, res) => {
    pool.query('SHOW TABLES', (error, results, fields) => {
        if (error) {
            console.error('Error al obtener las tablas:', error);
            res.status(500).json({ error: 'Error al obtener las tablas' });
            return;
        }

        const tables = results.map(result => result[Object.keys(result)[0]]);
        res.json({ tables });
    });
});




app.get('/expediente', (req, res) => res.send('Obtener expediente'))

app.post('/expediente', (req, res) => res.send('Crear expediente'))

app.put('/expediente', (req, res) => res.send('Actualizando expediente'))

app.delete('/expediente', (req, res) => res.send('Eliminar expediente'))

app.listen(3000, () => {
    console.log("Server running on port 3000");
});