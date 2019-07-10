const express = require('express');
const _ = require('lodash');


const validateAppointmentFields = (req, res, next) => {
   const fieldsToCheck = ['date', 'content', 'time', 'selectedTeam'];
   if (_.every(_.map(req.body, f => !_.isEmpty(f)))) {
      return next();
   }
   return res.sendStatus(400);
}


module.exports = {
   validateAppointmentFields
}
