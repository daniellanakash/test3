const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const _ = require('lodash');
const appointmentRouter = require('./controllers/appointments.controller.js');
const teamRouter = require('./controllers/teams.controller.js');

app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamRouter);
app.use('/appointments', appointmentRouter);

const listen = () => {
   app.listen(4000, () => {
      console.log('Server Up! ports 4000')
   })
}

const init = async () => {
   try {
      const connection = await mysql.createConnection({
         host: 'localhost',
         user: 'root',
         database: 'Apointment',
         password: '1234'
      })
      global.sql = connection;
      listen();
   }
   catch (err) {
      console.log(err)
   }
}

init();
