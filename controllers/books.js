/**
 * Created by ilook on 9/14/2016.
 */
var books = {
    getAll: function(req, res) {
        var allbooks = data;
        res.json(allbooks);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var book = data[id];
        res.json(book);
    },

    create: function(req, res) {

        var newbooks = req.body;
        data.push(newbooks);
        res.json(newbooks);
    },

    update: function(req, res) {
        var updatebook = req.body;
        var id = req.params.id;
        data[id] = updatebook
        res.json(updatebook);
    },

    delete: function(req, res) {
        var id = req.params.id;
        data.splice(id, 1)
        res.json(true);
    }
};

module.exports = books;
