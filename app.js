const express = require('express')
const app = express();
//const port = 5000;


const mongoose=require('mongoose');

const DB_URL='mongodb+srv://abarriosr1:Yulian1406@ucentral.qx5tpcz.mongodb.net/predial?retryWrites=true&w=majority&appName=ucentral'

async function conectarDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log('CONEXION CORRECTA!!');
    } catch (error) {
        console.error('DB: ERROR DE CONEXIÓN!!', error);
    }
}

conectarDB();


//consultar datos
// Función para buscar por coincidencia uno
// Ruta para recibir el criterio de búsqueda desde el front-end
app.get('/buscar', async (req, res) => {
    try {
        const db = mongoose.connection;
        const collection = db.collection('natagaima_final_ok');

        const { criterio } = req.query;
        console.log('Criterio de búsqueda recibido:', criterio); // Verificar el criterio de búsqueda

        const query = { ficha: criterio };
        const result = await collection.findOne(query);
        console.log('Resultado encontrado:', result); // Verificar el resultado

        res.json(result); // Enviar el resultado como JSON al front-end
    } catch (error) {
        console.error('Error al buscar en la base de datos:', error);
        res.status(500).json({ error: 'Error al buscar en la base de datos' });
    }
});



/*
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
*/