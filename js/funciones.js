function obtenerDatos() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // Simulación de una operación asincrónica
      var datos = { mensaje: "Datos obtenidos correctamente" };
      resolve(datos);  // Resuelve la promesa con los datos
    }, 2000);
  });
}

obtenerDatos()
  .then(function(datos) {
    console.log(datos.mensaje);
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });


