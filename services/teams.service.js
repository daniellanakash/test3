const express = require('express');
const _ = require('lodash');

const fetchTeams = req => {
   return new Promise((res, rej) => {
      global.sql.query('select team from teams', (err, results) => {
         if (err) {
            return rej()
         }
         return res(results);
      })
   })
}

module.exports = {
   fetchTeams
}
