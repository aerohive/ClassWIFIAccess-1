var User = require("./../models/user");
var translate = require('./../translate/translate');

module.exports = function(router, isAuthenticated){
    /* GET Home Page */
    router.get('/', isAuthenticated, function(req, res) {
        User.findById(req.query.id, null, function (err, user) {
            translate(user, req, function (translationFile) {
                res.render('index', {user: req.user, user_button: translationFile.user_button});
            });
        });
    });
};


