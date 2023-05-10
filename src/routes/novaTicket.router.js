const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/get_ticket_all', async (req, res) => {
  try {
    const {
      string_nombre_referencia,
      int_id_prioridad,
      int_estado_resolucion,
      int_id_proceso,
      int_id_cat_tipo,
      int_id_cat_canal,
      int_id_cat_equipo,
      int_id_cat_seguimiento,
      int_id_cat_responsable,
      int_id_cat_solicitante,
      int_id_cat_creado_por,
      date_asignacion_inicio,
      date_asignacion_fin,
      date_resolucion_inicio,
      date_resolucion_fin,
      date_ultima_vista_inicio,
      date_ultima_vista_fin,
      date_vencimiento_inicio,
      date_vencimiento_fin,
      date_primera_respuesta_inicio,
      date_primera_respuesta_fin,
      date_creacion_inicio,
      date_creacion_fin,
      date_actualizacion_inicio,
      date_actualizacion_fin,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_ticket_all($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)', [string_nombre_referencia, int_id_prioridad, int_estado_resolucion, int_id_proceso, int_id_cat_tipo, int_id_cat_canal, int_id_cat_equipo, int_id_cat_seguimiento, int_id_cat_responsable, int_id_cat_solicitante, int_id_cat_creado_por, date_asignacion_inicio, date_asignacion_fin, date_resolucion_inicio, date_resolucion_fin, date_ultima_vista_inicio, date_ultima_vista_fin, date_vencimiento_inicio, date_vencimiento_fin, date_primera_respuesta_inicio, date_primera_respuesta_fin, date_creacion_inicio, date_creacion_fin, date_actualizacion_inicio, date_actualizacion_fin]);

    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Set_Ticket', async (req, res) => {
  try {
    const {
      str_resumen,
      str_descripcion,
      int_id_cat_equipo,
      int_id_estado_proceso,
      int_estado_resolucion,
      int_id_responsable,
      int_id_solicitante,
      int_id_cat_proceso,
      int_id_ticket_canal,
      int_id_ticket_prioridad,
      int_estado,
      int_creado_por,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT nova_ticket.add_ticket_primario($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)', [str_resumen, str_descripcion, int_id_cat_equipo, int_id_estado_proceso, int_estado_resolucion, int_id_responsable, null, int_id_solicitante, int_id_cat_proceso, int_id_ticket_canal, int_id_ticket_prioridad, int_estado, int_creado_por, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/Set_Subticket', async (req, res) => {
  try {
    const {
      str_resumen,
      str_descripcion,
      int_id_cat_equipo,
      int_id_estado_proceso,
      int_estado_resolucion,
      int_id_responsable,
      str_ref_ticket_padre,
      int_id_solicitante,
      int_id_cat_proceso,
      int_id_ticket_canal,
      int_id_ticket_prioridad,
      int_estado,
      int_creado_por,
      int_actualizado_por,
    } = req.body;
    await getConnGroupNova.query('CALL nova_ticket.sp_set_subticket($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14);', [str_resumen, str_descripcion, int_id_cat_equipo, int_id_estado_proceso, int_estado_resolucion, int_id_responsable, str_ref_ticket_padre, int_id_solicitante, int_id_cat_proceso, int_id_ticket_canal, int_id_ticket_prioridad, int_estado, int_creado_por, int_actualizado_por]);

    res.send('SubTicket creado correctamente');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/Get_ticket_por_usuario', async (req, res) => {
  // Get_ticket_por_usuario
  try {
    const { int_id_cat_tipo, int_creado_por } = req.body;
    const response = await getConnGroupNova.query('SELECT * from nova_ticket.get_referencia_ticket_creado($1,$2);', [int_id_cat_tipo, int_creado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
