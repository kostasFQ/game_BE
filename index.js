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
  const dbResponse = await saveUser(req.body);
  res.send(dbResponse);
})

app.get('/leader-board', async (req, res) => {
  const { count } = req.query;
  const allUsers = await getUsers(Number(count));
  res.send(allUsers);
})
 
app.listen(PORT)