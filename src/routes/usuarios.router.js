const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Post_Usuario', async (req, res) => {
  try {
    const {
      str_nombre,
      str_id_ad,
      str_correo,
      int_creado_por,
      str_user_principal_name,
      bit_apagado_automatico,
      int_telefono,
      int_codigo_pais,
      int_id_cat_usuario_dominio,
      int_tipo_usuario,
      int_id_cat_usuario_categoria,
      str_username,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.add_usuario($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [str_nombre, str_id_ad, str_correo, int_creado_por, str_user_principal_name, bit_apagado_automatico, int_telefono, int_codigo_pais, int_id_cat_usuario_dominio, int_tipo_usuario, int_id_cat_usuario_categoria, str_username]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Puestos', async (req, res) => {
  try {
    const { str_puesto_nombre, int_creado_por, int_actualizado_por } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_puestos($1,$2,$3);', [str_puesto_nombre, int_creado_por, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Puestos_Equipo', async (req, res) => {
  try {
    const { int_id_cat_puesto } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_asignacion_equipo($1);', [int_id_cat_puesto]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Equipos', async (req, res) => {
  try {
    const {
      str_equipo_nombre,
      int_id_cat_departamento,
      int_id_cat_empresa,
      int_creado_por,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_equipos($1,$2,$3,$4,$5);', [str_equipo_nombre, int_id_cat_departamento, int_id_cat_empresa, int_creado_por, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Equipo_Responsable', async (req, res) => {
  try {
    const { int_id_cat_usuario, int_cat_equipo } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_equipo_responsable($1,$2);', [int_id_cat_usuario, int_cat_equipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/api/usuarios/Get_Equipo_Usuarios', async (req, res) => {
  try {
    const { int_id_cat_usuario, int_cat_equipo } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_equipo_usuario($1,$2);', [int_id_cat_usuario, int_cat_equipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_usuarios', async (req, res) => {
  try {
    const {
      str_usuario_nombre,
      int_creado_por,
      int_actualizado_por,
      str_username,
      int_empresa,
      int_departamento,
      int_equipo,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_usuarios($1,$2,$3,$4,$5,$6,$7);', [str_usuario_nombre, int_creado_por, int_actualizado_por, str_username, int_empresa, int_departamento, int_equipo]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_usuario_puestos', async (req, res) => {
  try {
    const { int_id_cat_usuario, predeterminado } = req.body;
    const response = await getConnGroupNova.query('SELECT * from usuarios.get_usuario_puestos($1,$2);', [int_id_cat_usuario, predeterminado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_empresas', async (req, res) => {
  const {
    str_empresa_nombre,
    int_id_delta,
    str_nombre_delta,
    int_creado_por,
    int_actualizado_por,
  } = req.body;
  const response = await getConnGroupNova.query('SELECT * from usuarios.get_empresas($1,$2,$3,$4,$5);', [str_empresa_nombre, int_id_delta, str_nombre_delta, int_creado_por, int_actualizado_por]);
  res.status(200).json(response.rows);
});

router.post('/Get_empresa_responsable', async (req, res) => {
  const { int_id_cat_usuario, int_id_cat_empresa } = req.body;
  const response = await getConnGroupNova.query('SELECT * from usuarios.get_empresa_responsable($1,$2);', [int_id_cat_usuario, int_id_cat_empresa]);
  res.status(200).json(response.rows);
});

router.post('/Get_departamentos', async (req, res) => {
  const {
    str_departamento_nombre, int_creado_por, int_actualizado_por, int_id_cat_empresa,
  } = req.body;
  const response = await getConnGroupNova.query('SELECT * from usuarios.get_departamentos($1,$2,$3,$4);', [str_departamento_nombre, int_creado_por, int_actualizado_por, int_id_cat_empresa]);
  res.status(200).json(response.rows);
});

router.post('/Get_departamento_responsable', async (req, res) => {
  const { int_id_cat_departamento } = req.body;
  const response = await getConnGroupNova.query('SELECT * from usuarios.get_departamento_responsable($1);', [int_id_cat_departamento]);
  res.status(200).json(response.rows);
});

router.post('/Post_Marcaje', async (req, res) => {
  const {
    str_usuario,
    str_accion,
  } = req.body;
  const response = await getConnGroupNova.query('SELECT * FROM general.add_marcaje($1,$2)', [str_usuario, str_accion]);
  res.status(200).json(response.rows);
});

router.post('/Post_Documento_GrupoNuevo', async (req, res) => {
  try {
    const {
      int_id_cat_permiso_nivel,
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.post_documento_gruponuevo($1,$2,$3)', [int_id_cat_permiso_nivel, str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_GrupoUsuario', async (req, res) => {
  try {
    const {
      int_id_cat_usuario,
      int_id_cat_permiso_grupo,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.post_documento_grupousuario($1,$2,$3)', [int_id_cat_usuario, int_id_cat_permiso_grupo, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_Usuario', async (req, res) => {
  try {
    const {
      str_nombre,
      str_id_ad,
      str_correo,
      int_id_creador,
      str_user_principal_name,
      bit_apagado_automatico,
      int_telefono,
      int_codigo_pais,
      int_id_cat_usuario_dominio,
      int_tipo_usuario,
      int_id_cat_usuario_categoria,
      str_username,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.post_documento_usuario($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [str_nombre, str_id_ad, str_correo, int_id_creador, str_user_principal_name, bit_apagado_automatico, int_telefono, int_codigo_pais, int_id_cat_usuario_dominio, int_tipo_usuario, int_id_cat_usuario_categoria, str_username]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_GrupoEditar', async (req, res) => {
  try {
    const {
      int_id_cat_permiso_grupo,
      int_id_cat_permiso_nivel,
      str_nombre,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT usuarios.put_documento_grupoeditar($1,$2,$3,$4,$5)', [int_id_cat_permiso_grupo, int_id_cat_permiso_nivel, str_nombre, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_GrupoUsuario', async (req, res) => {
  try {
    const {
      int_id_det_usuario_asignacion_permiso,
      int_id_cat_usuario,
      int_id_cat_permiso_grupo,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT usuarios.put_documento_grupousuario($1,$2,$3,$4,$5)', [int_id_det_usuario_asignacion_permiso, int_id_cat_usuario, int_id_cat_permiso_grupo, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_Usuario', async (req, res) => {
  try {
    const {
      int_id_cat_usuario,
      str_nombre,
      str_id_ad,
      str_correo,
      str_user_principal_name,
      int_telefono,
      int_codigo_pais,
      int_id_cat_usuario_dominio,
      int_tipo_usuario,
      int_id_cat_usuario_categoria,
      str_username,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT usuarios.put_documento_usuario($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)', [int_id_cat_usuario, str_nombre, str_id_ad, str_correo, str_user_principal_name, int_telefono, int_codigo_pais, int_id_cat_usuario_dominio, int_tipo_usuario, int_id_cat_usuario_categoria, str_username, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_UsuarioAsignacionPermiso', async (req, res) => {
  try {
    const {
      int_id_usuario,
      int_permiso,
      str_nombre_usuario,
      str_nombre_empresa,
      str_nombre_equipo,
      str_nombre_departamento,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_usuarioasignacionpermiso($1,$2,$3,$4,$5,$6,$7)', [int_id_usuario, int_permiso, str_nombre_usuario, str_nombre_empresa, str_nombre_equipo, str_nombre_departamento, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_GrupoAsignacionAplicativo', async (req, res) => {
  try {
    const {
      int_id_cat_permiso_grupo,
      int_id_cat_aplicativo,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.post_documento_grupoasignacionaplicativo($1,$2,$3)', [int_id_cat_permiso_grupo, int_id_cat_aplicativo, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.put('/Put_Documento_GrupoAsignacionAplicativo', async (req, res) => {
  try {
    const {
      int_id_det_grupo_asignacion_aplicativo,
      int_id_cat_permiso_grupo,
      int_id_cat_aplicativo,
      int_estado,
      int_actualizado_por,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT usuarios.put_documento_grupoasignacionaplicativo($1,$2,$3,%4,%5)', [int_id_det_grupo_asignacion_aplicativo, int_id_cat_permiso_grupo, int_id_cat_aplicativo, int_estado, int_actualizado_por]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_GrupoAsignacionAplicativo', async (req, res) => {
  try {
    const {
      str_nombre_grupo,
      str_nombre_aplicativo,
      str_nombre_nivel,
      str_descripcion_nivel,
      int_estado,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM usuarios.get_documento_grupoasignacionaplicativo($1,$2,$3,$4,$5)', [str_nombre_grupo, str_nombre_aplicativo, str_nombre_nivel, str_descripcion_nivel, int_estado]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
