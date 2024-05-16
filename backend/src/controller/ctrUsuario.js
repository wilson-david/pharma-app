const pool = require('../conexion/conexion.js');


const getUser = async (req, res) => {
  const { user} = req.body;

  try {
      const response = await pool.query('select * from usuario');
      res.status(200).json(response.rows);
  } catch (error) {
      console.error("Error en la consulta a la base de datos:", error);
      res.status(500).json({ error: "Error en la consulta a la base de datos" });
  }
};

module.exports = {
  getUser
};
