var model = require('../models/appModel.js');

function post_login(request, response) {
    console.log('[CTRL]', request.body);
    var { username, password } = request.body;

    model.getUser(username, password, (result) => {

        if (result.rows.length > 0) {
            response.send("login successful");
        } else {
            response.send("incorrect username or password");
        }

    });
}

module.exports = {
    post_login
}