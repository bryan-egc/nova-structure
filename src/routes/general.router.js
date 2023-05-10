const express = require('express');
const { getConnGroupNova } = require('../db/config');

const router = express.Router();

router.post('/Post_Documento_Pais', async (req, res) => {
  try {
    const {
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM general.post_documento_pais($1,$2)', [str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Post_Documento_Moneda', async (req, res) => {
  try {
    const {
      str_simbolo,
      str_nombre,
      int_id_creador,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM general.post_documento_moneda($1,$2,$3)', [str_simbolo, str_nombre, int_id_creador]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Moneda', async (req, res) => {
  try {
    const {
      str_simbolo,
      str_nombre,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM general.get_documento_moneda($1,$2)', [str_simbolo, str_nombre]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

router.post('/Get_Documento_Pais', async (req, res) => {
  try {
    const {
      str_nombre,
    } = req.body;
    const response = await getConnGroupNova.query('SELECT * FROM general.get_documento_pais($1)', [str_nombre]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(400).json({ error: `La información ingresada es incorrecta. ${error.message}` });
  }
});

module.exports = {
  router,
};
