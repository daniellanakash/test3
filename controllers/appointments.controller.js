const express = require('express');
const router = express.Router();
const appointmentService = require('../services/appointments.service.js');
const appointmetValidation = require('../validations/appointments.validation.js');

router.put('/', appointmetValidation.validateAppointmentFields, async (req, res) => {
   try {
      await appointmentService.addAppointment(req);
      res.sendStatus(201);
   }
   catch (err) {
      res.sendStatus(400);
   }
})

router.get('/', async (req, res) => {
   try {
      const appointments = await appointmentService.getAppointmentsForTeam(req);
      res.json({ appointments });
   }
   catch (err) {
      console.log(err)
      res.sendStatus(400);
   }
})

module.exports = router;
