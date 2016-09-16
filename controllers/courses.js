/**
 * Created by ilook on 9/15/2016.
 */
var courses = {
    getAll: function(req, res) {
        var allcourses = coursesData;
        res.json(allcourses);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var course = coursesData[id];
        res.json(course);
    },

    create: function(req, res) {
        var newcourse= req.body;
        coursesData.push(newcourse);
        res.json(newcourse);
    },

    update: function(req, res) {
        var updateCourse = req.body;
        var id = req.params.id;
        coursesData[id] = updateCourse;
        res.json(updateCourse);
    },

    delete: function(req, res) {
        var id = req.params.id;
        coursesData.splice(id, 1);
        res.json(removed);
    }
};

module.exports = courses;
