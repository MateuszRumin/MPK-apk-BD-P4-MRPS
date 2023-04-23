const express = require("express");
const app = express();
const cors = require("cors");

//pobranie danych tabel
const db = require('./models')






//połączenie
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log("Aplikacja dziala na porcie 3001");
    });
  });