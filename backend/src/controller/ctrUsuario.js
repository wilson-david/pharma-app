const pool = require('../conexion/conexion.js');


const getUser = async (req, res) => {
  const { user, password} = req.body;  
  try {
    const response = await pool.query('SELECT * FROM usuario WHERE usuario = $1 AND contrasenia = $2', [user,password]);
    res.status(200).json(response.rows);
  } catch (error) {
      console.error("Error en la consulta a la base de datos:", error);
      res.status(500).json({ error: "Error en la consulta a la base de datos" });
  }
};


const getPedido = async (req, res) => {
  const { user, password} = req.body;  
  try {
    const response = await pool.query('SELECT i.nombre,precio FROM ordenes o INNER JOIN items i ON i.id_items  = o.id_item');
    res.status(200).json(response.rows);
  } catch (error) {
      console.error("Error en la consulta a la base de datos:", error);
      res.status(500).json({ error: "Error en la consulta a la base de datos" });
  }
};

module.exports = {
  getUser,
  getPedido
};
