const sql = require('mssql');

const config = {
  user: 'userconsulta',
  password: 'Servi2022$',
  server: 'SRVDELTA01',
  database: 'SIAC_NV',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const getConnCuenta = new sql.ConnectionPool(config);

getConnCuenta.connect()
  .then(() => {
    console.log('Conectando a la base de datos de Cuenta en DELTA');
  })
  .catch((err) => {
    console.log(`Error al conectar: ${err}`);
  });

module.exports = {
  getConnCuenta,
};
