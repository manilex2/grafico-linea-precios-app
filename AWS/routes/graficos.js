const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/grafico/:indice', async (req, res) => {
    const { indice } = req.params;
    const datos = await pool.query(`SELECT * FROM (SELECT * FROM ${process.env.TABLE_CRIPTO} WHERE name = ? ORDER BY fecha DESC LIMIT 10)Var1 ORDER BY fecha ASC;`, [indice]);
    const datosExtraidos = JSON.stringify(datos);
    res.send(datosExtraidos);
});

module.exports = router; 