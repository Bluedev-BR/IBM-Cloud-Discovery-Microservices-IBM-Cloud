const app = require('express')();
const port = process.env.PORT || 3000;

app.use('/', require('./app/routes/index'));
app.get('/', (req, res) => res.send(healthCheckMessage));

const healthCheckMessage = `Servidor ouvindo na porta ${port}`;

app.listen(port, () => {
  console.log(healthCheckMessage);
})