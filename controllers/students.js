/**
 * Created by ilook on 9/12/2016.
 */
var students = {
    getAll: function(req, res) {
        var allstudents = studentData;
        res.json(allstudents);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var student = studentData[id];
        res.json(student);
    },

    create: function(req, res) {
        var newstudent = req.body;
        studentData.push(newstudent);
        res.json(newstudent);
    },

    update: function(req, res) {
        var updateStudent = req.body;
        var id = req.params.id;
        studentData[id] = updateStudent
        res.json(updateStudent);
    },

    delete: function(req, res) {
        var id = req.params.id;
        studentData.splice(id, 1)
        res.json(removed);
    }
};

module.exports = students;
