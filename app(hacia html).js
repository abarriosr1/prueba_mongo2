const express = require('express')
const app=express()

//const port = 3000;

const mongoose=require('mongoose');

/*
const{Usuarios}=require('./modeloUser')
const{Publicaciones}=require('./modeloPublicaciones')
*/

const DB_URL='mongodb+srv://abarriosr1:Yulian1406@ucentral.qx5tpcz.mongodb.net/predial?retryWrites=true&w=majority&appName=ucentral'

// Middleware para parsear JSON
app.use(express.json());

async function conectarDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log('CONEXION CORRECTA!!');
    } catch (error) {
        console.error('DB: ERROR DE CONEXIÓN!!', error);
    }
}

conectarDB();

/*
//consultar datos
// Función para buscar por coincidencia uno
const buscarPorCoincidenciaUno = async () => {
    try {
        const db = mongoose.connection;
        const collection = db.collection('natagaima_final_ok'); // Obtener la colección directamente

        const query = { ficha: "0001000000010002000000000" }; // Definir el criterio de búsqueda
        const result = await collection.findOne(query); // Realizar la consulta

        console.log('RESULTADO:', result);
    } catch (error) {
        console.error('Error al buscar:', error);
    } finally {
        mongoose.disconnect(); // Cerrar la conexión después de la operación
    }
};

// Llamar a la función para buscar por coincidencia uno
buscarPorCoincidenciaUno();
*/

// Definir ruta para buscar por coincidencia uno
app.get('/buscar', async (req, res) => {
    try {
        const db = mongoose.connection;
        const collection = db.collection('natagaima_final_ok'); // Obtener la colección directamente

        // Obtener el criterio de búsqueda desde los parámetros de la URL
        const { ficha } = req.query;
        const query = { ficha }; // Definir el criterio de búsqueda

        // Realizar la consulta
        const result = await collection.findOne(query);

        // Enviar resultado al front-end
        res.json(result);
    } catch (error) {
        console.error('Error al buscar:', error);
        res.status(500).json({ error: 'Error al buscar en la base de datos' });
    }
});

/*
// Iniciar el servidor Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
*/

/*
// Iniciar el servidor Express
const PORT = process.env.PORT //||4000

app.listen(PORT,function() {
    console.log('servidor escuchando en el puerto',PORT)
})
*/
