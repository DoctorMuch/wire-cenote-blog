const path = require('path');
const express = require('express');
const session = require('express-session');

// const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Connected to database and listening'));
});
