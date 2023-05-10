const express = require('express');

const { router: recepcionesDocumentoRouter } = require('./recepcionDocumentos.router');
const { router: generalRouter } = require('./general.router');
const { router: usuariosRouter } = require('./usuarios.router');
const { router: deltaRouter } = require('./delta.router');
const { router: novaTicketRouter } = require('./novaTicket.router');
const { router: comprasPresupuestoRouter } = require('./comprasPresupuesto.router');
const { router: comprasCuentaRouter } = require('./comprasCuenta.router');
const { router: comprasProveedorRouter } = require('./comprasProveedor.router');
const { router: novaAplicacionRouter } = require('./novaAplicacion.router');
const { router: novaProcesoTareaRouter } = require('./novaProcesoTarea.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/', router);
  router.use('/recepciones_documento', recepcionesDocumentoRouter);
  router.use('/general', generalRouter);
  router.use('/usuarios', usuariosRouter);
  router.use('/delta', deltaRouter);
  router.use('/nova_ticket', novaTicketRouter);
  router.use('/compras_presupuesto', comprasPresupuestoRouter);
  router.use('/compras_cuenta', comprasCuentaRouter);
  router.use('/compras_proveedor', comprasProveedorRouter);
  router.use('/nova_aplicacion', novaAplicacionRouter);
  router.use('/nova_proceso_tarea', novaProcesoTareaRouter);
}

module.exports = { routerApi };
