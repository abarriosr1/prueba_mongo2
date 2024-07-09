const mongoose=require('mongoose');

//esquemas BASE DE DATOS
const UsuariosSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            unique:true
        },
        numberPhone:{
            type:Number,
            default:'123-456'
        }
    },
    {timestamps:true, versionKey:false}
)

//modelar
const Usuarios=new mongoose.model('usuarios', UsuariosSchema)

//exportar
module.exports={Usuarios}