const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/GetProveedorTipo', async (req, res) => {
  const { nombre, creado_por, actualizado_por } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_proveedor.get_cat_proveedor_tipo($1,$2,$3);', [nombre, creado_por, actualizado_por]);
  res.status(200).json(response.rows);
});

router.post('/PostProveedorTipo', async (req, res) => {
  const { nombre, creado_por } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_tipo_add($1,$2);', [nombre, creado_por]);
  res.send('Tipo proveedor agregado correctamente');
});

router.put('/UpdateProveedorTipo', async (req, res) => {
  const {
    tipo_id, nombre, estado, actualizado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_tipo_update($1,$2,$3,$4);', [tipo_id, nombre, estado, actualizado_por]);
  res.send('Tipo proveedor actualizado correctamente');
});

router.post('/GetProveedorGiro', async (req, res) => {
  const { nombre, creado_por, actualizado_por } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_proveedor.get_cat_proveedor_giro($1,$2,$3);', [nombre, creado_por, actualizado_por]);
  res.status(200).json(response.rows);
});

router.post('/PostProveedorGiro', async (req, res) => {
  const { nombre, descripcion, creado_por } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_giro_add($1,$2,$3);', [nombre, descripcion, creado_por]);
  res.send('Giro proveedor agregado correctamente');
});

router.put('/UpdateProveedorGiro', async (req, res) => {
  const {
    giro_id, nombre, descripcion, estado, actualizado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_giro_update($1,$2,$3,$4,$5);', [giro_id, nombre, descripcion, estado, actualizado_por]);
  res.send('Giro proveedor actualizado correctamente');
});

router.post('/GetProveedor', async (req, res) => {
  const {
    nombre, nit, correo, proveedor_tipo_id, proveedor_giro_id, creado_por, actualizado_por,
  } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_proveedor.get_cat_proveedor($1,$2,$3,$4,$5,$6,$7);', [nombre, nit, correo, proveedor_tipo_id, proveedor_giro_id, creado_por, actualizado_por]);
  res.status(200).json(response.rows);
});

router.post('/PostProveedor', async (req, res) => {
  const {
    giro_id, tipo_id, nombre, nit, email, telefono, celular, archivo, creado_por, usuario_id,
  } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_add($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);', [giro_id, tipo_id, nombre, nit, email, telefono, celular, archivo, creado_por, usuario_id]);
  res.send('Proveedor agregado correctamente');
});

router.put('/UpdateProveedor', async (req, res) => {
  const {
    proveedor_id,
    giro_id,
    tipo_id,
    nombre,
    nit,
    email,
    telefono,
    celular,
    rtu,
    estado,
    actualizado_por,
    id_cat_usuario,
  } = req.body;
  await getConnGroupNova.query('CALL compras_proveedor.sp_tbl_cat_proveedor_update($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);', [proveedor_id, giro_id, tipo_id, nombre, nit, email, telefono, celular, rtu, estado, actualizado_por, id_cat_usuario]);
  res.send('Proveedor actualizado correctamente');
});

module.exports = {
  router,
};
