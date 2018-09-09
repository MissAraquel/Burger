//Import orm.js into burger.js
//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.

var orm = require("../config/orm.js");

var burger = {

    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(burger_id, callback) {
        orm.updateOne(burger_id, function (res) {
            callback(res);
        });
    }
};

module.exports = burger; 