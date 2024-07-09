/*ejemplo 1 */
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    const data = document.getElementById('dataInput').value;

    // Envía los datos al servidor para su procesamiento
    fetch('/consultar-datos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resultado.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });
});


/*otro ejemplo*/
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('js/script.js', methods=['POST'])
def buscar_ficha():
    # Obtener el número de ficha enviado desde la página web
    numero_ficha = request.json['numero_ficha']

    # Realizar la lógica de búsqueda aquí
    # Supongamos que aquí tienes tu lógica de búsqueda que retorna un resultado
    resultado = "Resultado de búsqueda para la ficha {}".format(numero_ficha)

    # Devolver el resultado como JSON
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run(debug=True)