from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['mi_basededatos']
collection = db['mi_coleccion']

@app.route('/buscar-producto', methods=['POST'])
def buscar_producto():
    nombre_producto = request.json['nombre']

    resultado = collection.find_one({'nombre': nombre_producto})

    if resultado:
        return jsonify({'nombre': resultado['nombre'], 'precio': resultado['precio']})
    else:
        return jsonify({'error': 'Producto no encontrado'}), 404

if __name__ == '__main__':
    app.run(debug=True)