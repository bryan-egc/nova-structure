const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/PostCuentaClasificacion', async (req, res) => {
  const { nombre, creado_por } = req.body;
  await getConnGroupNova.query('CALL compras_cuenta.sp_tbl_cat_cuenta_clasificacion_add($1,$2);', [nombre, creado_por]);
  res.send('Cuenta clasificacion agregada correctamente');
});

router.post('/GetCuentaClasificacion', async (req, res) => {
  const { cuenta_clasficacion_nombre, creado_por, actualizado_por } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_cuenta.get_cuenta_clasificacion($1,$2,$3);', [cuenta_clasficacion_nombre, creado_por, actualizado_por]);
  res.status(200).json(response.rows);
});

router.put('/UpdateCuentaClasificacion', async (req, res) => {
  const {
    clasificacion_id, nombre, estado, actualizado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_cuenta.sp_tbl_cat_cuenta_clasificacion_update($1,$2,$3,$4);', [clasificacion_id, nombre, estado, actualizado_por]);
  res.send('Cuenta clasificacion actualizada correctamente');
});

router.post('/PostCuenta', async (req, res) => {
  const {
    clasificacion_id, nombre, descripcion, creado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_cuenta.sp_tbl_cat_cuenta_add($1,$2,$3,$4);', [clasificacion_id, nombre, descripcion, creado_por]);
  res.send('Cuenta agregada correctamente');
});

router.put('/UpdateCuenta', async (req, res) => {
  const {
    cuenta_id, clasificacion_id, nombre, descripcion, estado, actualizado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_cuenta.sp_tbl_cat_cuenta_update($1,$2,$3,$4,$5,$6);', [cuenta_id, clasificacion_id, nombre, descripcion, estado, actualizado_por]);
  res.send('Cuenta actualizada correctamente');
});

router.post('/GetCuenta', async (req, res) => {
  const {
    cuenta_nombre, clasificacion_id, id_creado_por, id_actualizado_por,
  } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_cuenta.get_cuenta($1,$2,$3,$4);', [cuenta_nombre, clasificacion_id, id_creado_por, id_actualizado_por]);
  res.status(200).json(response.rows);
});

module.exports = {
  router,
};
