const getUser = (req, res) => {
  
  const responseData = { message: 'Datos desde el servidor prueba' };
  res.json(responseData);
};

module.exports = {
  getUser
};
