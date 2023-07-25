const controller = require('../controllers/thing.controller')


module.exports = function(app) {
    app.get('/thing', controller.getThings);
    app.post('/thing', controller.createThing);
};
