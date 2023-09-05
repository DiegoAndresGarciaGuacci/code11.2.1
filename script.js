//evento escuha para escuchar el submit cuando se mandar el formlario
document.getElementById("registro").addEventListener("submit", function(event) {
    event.preventDefault(); //hace q no se recargue cuando se man da

//defino constantes
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // json con info del formu
    let data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
    };

    // envio datos con el fech
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    })

//si se manda correctamente responde algo y sino muestra el error
    .then(response => response.json())
    .then(data => {
        console.log('Registro exitoso: :) ', data);
        
    })
    .catch(error => {
        console.error('Error al registrar, :(   )):', error);
    });
});