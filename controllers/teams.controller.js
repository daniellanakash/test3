const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const teamService = require('../services/teams.service.js');


router.get('/', async (req, res) => {
   try {
      const teams = await teamService.fetchTeams(req);
      res.json({ teams });
   }
   catch (err) {
      console.log(err)
      res.sendStatus(400);
   }
});

module.exports = router;
