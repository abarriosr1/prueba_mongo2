const express = require('express')
const app=express()

const mongoose=require('mongoose');

/*
const{Usuarios}=require('./modeloUser')
const{Publicaciones}=require('./modeloPublicaciones')
*/

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

/*
//insertar datos
const crearUsuario=()=>{
    Usuarios.create(
        {
        name:'Angel',
        email:'angel@ucentral.edu.co',
        numberPhone:123456
        }
    )
}
crearUsuario()

const createPublicacion=()=>{
    const listPost =[
        {
            title:'Mi post!',
            description:'Hello hello',
            author:'6021150a1f183b248c8a8e3f'
            //author:mongoose.Types.ObjectId('6021150a1f183b248c8a8e3f')
        },
        {
            title:'Mi segundo post!',
            description:'Hi hi',
            author:'6021150a1f183b248c8a8e3f'
            //author:mongoose.Types.ObjectId('6021150a1f183b248c8a8e3f')
        }
    ]
    Publicaciones.insertMany(listPost)
}
createPublicacion()


//consultar datos
const buscarPorId =async()=>{
    const user=await Usuarios.findById('6021150a1f183b248c8a8e3f')
    console.log('El Usuario es: ', user);
}
buscarPorId();

const buscarPorCoincidenciaUno = async()=>{
    const post =await Publicaciones.findOne({
        title:"Mi post!"
    })
    console.log('RESULTADO: ',post)
}
buscarPorCoincidenciaUno();

const buscarPorCoincidenciaTodos = async()=>{
    const post =await Publicaciones.find({
        title:"Mi post!"
    })
    console.log('RESULTADO: ',post)
}
buscarPorCoincidenciaTodos();

//probando otros operadores $eq
const buscarPorCoincidenciaTodos2 = async()=>{
    const post =await Publicaciones.find({
        title:{$eq:"Mi post!"}
    })
    console.log('RESULTADO: ',post)
}
buscarPorCoincidenciaTodos2();

*/



/*
app.get('/', function(req, res){
    res.send('Hello')})

app.listen(3000)
*/

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

// Iniciar el servidor Express
const PORT = process.env.PORT //||3000

app.listen(PORT,function() {
    console.log('servidor escuchando en el puerto',PORT)
})