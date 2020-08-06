//initialize handlebars (not express-handlebars)
const Handlebars = require('handlebars')
Handlebars.registerHelper('test', function (arg1, arg2) {
  return (arg1 === arg2) ? "checked" : ""
}
);