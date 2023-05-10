const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/PostAjustePresupuesto', async (req, res) => {
  const {
    det_presupuesto_id, mes, cuenta_abono_id, cuenta_cargo_id, monto, justificacion, creado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_bit_presupuesto_ajuste_add($1,$2,$3,$4,$5,$6,$7);', [det_presupuesto_id, mes, cuenta_abono_id, cuenta_cargo_id, monto, justificacion, creado_por]);
  res.send('Ajuste agregado correctamente');
});

router.post('/GetDetallePresupuesto', async (req, res) => {
  const { id_cat_presupuesto } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_presupuesto.get_detalle_presupuesto($1);', [id_cat_presupuesto]);
  res.status(200).json(response.rows);
});

router.post('/GetAjustePresupuesto', async (req, res) => {
  const {
    cuenta_abono_id, cuenta_cargo_id, presupuesto_id, creado_por, actualizado_por,
  } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_presupuesto.get_bit_presupuesto_ajuste($1,$2,$3,$4,$5);', [cuenta_abono_id, cuenta_cargo_id, presupuesto_id, creado_por, actualizado_por]);
  res.status(200).json(response.rows);
});

router.post('/GetPresupuestoEstado', async (req, res) => {
  const { nombre, creado_por, actualizado_por } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_presupuesto.get_presupuesto_estado($1,$2,$3);', [nombre, creado_por, actualizado_por]);
  res.status(200).json(response.rows);
});

router.post('/PostPresupuestoEstado', async (req, res) => {
  const { nombre, descripcion, creado_por } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_cat_presupuesto_estado_add($1,$2,$3);', [nombre, descripcion, creado_por]);
  res.send('Estado agregado correctamente');
});

router.put('/UpdatePresupuestoEstado', async (req, res) => {
  const {
    estado_id, nombre, descripcion, estado, actualizado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_cat_presupuesto_estado_update($1,$2,$3,$4,$5);', [estado_id, nombre, descripcion, estado, actualizado_por]);
  res.send('Estado actualizado correctamente');
});

router.post('/GetPresupuesto', async (req, res) => {
  const {
    empresa_id, presupuesto_estado_id, creado_por, actualizado_por,
  } = req.body;
  const response = await getConnGroupNova.query('SELECT * from compras_presupuesto.get_presupuesto($1,$2,$3,$4);', [empresa_id, presupuesto_estado_id, creado_por, actualizado_por]);
  res.status(200).json(response.rows);
});

router.post('/PostPresupuesto', async (req, res) => {
  const {
    empresa_id, monto, año, responsable_id, presupuesto_estado_id, creado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_cat_presupuesto_add($1,$2,$3,$4,$5,$6);', [empresa_id, monto, año, responsable_id, presupuesto_estado_id, creado_por]);
  res.send('Presupuesto agregado correctamente');
});

router.put('/UpdatePresupuesto', async (req, res) => {
  const {
    presupuesto_id,
    empresa_id,
    responsable_id,
    presupuesto_estado_id,
    monto,
    año,
    estado,
    actualizado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_cat_presupuesto_update($1,$2,$3,$4,$5,$6,$7,$8);', [presupuesto_id, empresa_id, responsable_id, presupuesto_estado_id, monto, año, estado, actualizado_por]);
  res.send('Presupuesto actualizado correctamente');
});

router.post('/PostDetallePresupuesto', async (req, res) => {
  const {
    cat_presupuesto_id,
    cuenta_id,
    monto_inicial,
    monto_final,
    enero_inicial,
    enero_final,
    febrero_inicial,
    febrero_final,
    marzo_inicial,
    marzo_final,
    abril_inicial,
    abril_final,
    mayo_inicial,
    mayo_final,
    junio_inicial,
    junio_final,
    julio_inicial,
    julio_final,
    agosto_inicial,
    agosto_final,
    septiembre_inicial,
    septiembre_final,
    octubre_inicial,
    octubre_final,
    noviembre_inicial,
    noviembre_final,
    diciembre_inicial,
    diciembre_final,
    creado_por_id,
  } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_det_presupuesto_add($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29);', [cat_presupuesto_id, cuenta_id, monto_inicial, monto_final, enero_inicial, enero_final, febrero_inicial, febrero_final, marzo_inicial, marzo_final, abril_inicial, abril_final, mayo_inicial, mayo_final, junio_inicial, junio_final, julio_inicial, julio_final, agosto_inicial, agosto_final, septiembre_inicial, septiembre_final, octubre_inicial, octubre_final, noviembre_inicial, noviembre_final, diciembre_inicial, diciembre_final, creado_por_id]);
  res.send('Presupuesto detalle agregado correctamente');
});

router.delete('/DeleteDetallePresupuesto', async (req, res) => {
  const { det_presupuesto_id } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_tbl_det_presupuesto_delete($1);', [det_presupuesto_id]);
  res.send('Presupuesto detalle eliminado correctamente');
});

router.put('/UpdateDetallePresupuesto', async (req, res) => {
  const {
    det_presupuesto_id,
    cat_presupuesto_id,
    cuenta_id,
    monto_inicial,
    monto_final,
    enero_inicial,
    enero_final,
    febrero_inicial,
    febrero_final,
    marzo_inicial,
    marzo_final,
    abril_inicial,
    abril_final,
    mayo_inicial,
    mayo_final,
    junio_inicial,
    junio_final,
    julio_inicial,
    julio_final,
    agosto_inicial,
    agosto_final,
    septiembre_inicial,
    septiembre_final,
    octubre_inicial,
    octubre_final,
    noviembre_inicial,
    noviembre_final,
    diciembre_inicial,
    diciembre_final,
    estado,
    actualizado_por,
  } = req.body;
  await getConnGroupNova.query('CALL compras_presupuesto.sp_det_presupuesto_update($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31);', [det_presupuesto_id, cat_presupuesto_id, cuenta_id, monto_inicial, monto_final, enero_inicial, enero_final, febrero_inicial, febrero_final, marzo_inicial, marzo_final, abril_inicial, abril_final, mayo_inicial, mayo_final, junio_inicial, junio_final, julio_inicial, julio_final, agosto_inicial, agosto_final, septiembre_inicial, septiembre_final, octubre_inicial, octubre_final, noviembre_inicial, noviembre_final, diciembre_inicial, diciembre_final, estado, actualizado_por]);
  res.send('Presupuesto detalle actualizado correctamente');
});

module.exports = {
  router,
};
