// Middlewar de tipo error

function logErrors(err, req, res, next) {
  console.log('logErors');
  console.error(err); // Mostramos el error en consola para poder monitorearlo
  next(err); //importante para saber que se esta enviando a un middleware de tipo error, si no tiene el error dentro entonces se esta mandando a uno normal
}

function errorHandler(err, req, res, next) {
  //así no se utilice next en el código se debe poner aqui, ya que un middleware de error tiene los cuatro parámetros
  console.log('errorHandler');
  res.status(500).json({
    //indicar que el error es estatus 500 Internal Server Error
    message: err.message,
    stack: err.stack, //mostrar info del error
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
