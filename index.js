require('./db/connect');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { getUsers, saveUser } = require('./db/service/controller');
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(cors());
 
app.post('/save', async (req, res) => {
  await saveUser(req.body);
  res.send({status: 200, response: 'OK'});
})

app.get('/leader-board', async (req, res) => {
  const allUsers = await getUsers();
  res.send(allUsers);
})
 
app.listen(PORT)