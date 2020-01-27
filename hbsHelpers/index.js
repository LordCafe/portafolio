let handlebars = require("express-handlebars");
module.exports = (app, dir ) => {
    app.set('view engine', '.hbs');
    let hbs = handlebars.create({
        extname: '.hbs',
        defaultView: 'layout',
        layoutsDir:  dir + '/views/',
        partialsDir: dir  + '/views/partials/',
        helpers: {
           
        }
    });
    app.engine('.hbs', hbs.engine);
}