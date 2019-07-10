const express = require('express');
const _ = require('lodash');

const addAppointment = req => {
   return new Promise((res, rej) => {
      console.log(req.body)
      const { date, head, content, time, selectedTeam } = req.body;
      global.sql.query(appointmentAddQueryBuilder(), [date, content, time, selectedTeam], (err, results) => {
         if (err) {
            console.log(err)
            return rej();
         }
         return res();
      })
   })
}

const appointmentAddQueryBuilder = () => {
   const addAppointmentQuery = `insert into appoint (date, content, time, team) values (?,?,?,?)`;
   return addAppointmentQuery;
}

const getAppointmentsForTeam = req => {
   return new Promise((res, rej) => {
      const { team } = req.query;
      global.sql.query(appointmentSelectQuery(), [team], (err, results) => {
         console.log('from 1:,', results);
         if (err) {
            return rej()
         }
         return res(results);
      })
   })
}

const appointmentSelectQuery = () => {
   const appointmentsForTeamQuery = `select * from appoint where team = ?`;
   return appointmentsForTeamQuery;
}



module.exports = {
   addAppointment,
   getAppointmentsForTeam
}
