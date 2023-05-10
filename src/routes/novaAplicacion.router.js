const express = require('express');
//const { getConnGroupNova } = require('../db/config');
//const jwt = require('express-jwt');

const router = express.Router();

// const secret = { secret: process.env.SECRET || 'secret' };

// router.post('/app_add', jwt(secret), async (req, res) => {
//   if (req.user.admin) {
//     const {
//       str_nombre, str_descripcion, int_estado, int_creado_por, int_modificado_por,
//     } = req.body;
//     await getConnGroupNova.query('CALL nova_aplicacion.sp_nova_aplicacion_add($1,$2,$3,$4,$5);', [str_nombre, str_descripcion, int_estado, int_creado_por, int_modificado_por]);
//     res.send('Aplicacion agregada correctamente');
//   }
//   res.status(401);
// });

module.exports = {
  router,
};
