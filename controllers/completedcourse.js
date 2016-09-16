/**
 * Created by ilook on 9/15/2016.
 */
var completedcourses = {
    getAll: function(req, res) {
        var completedcourses = completedcourseData;
        res.json(completedcourses);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var completedcourse = completedcourseData[id];
        res.json(completedcourse);
    },

    create: function(req, res) {
        var newcompletedcourse= req.body;
        completedcourseData.push(newcompletedcourse);
        res.json(newcompletedcourse);
    },

    update: function(req, res) {
        var updatecompletedCourse = req.body;
        var id = req.params.id;
        completedcourseData[id] = updatecompletedCourse;
        res.json(updatecompletedCourse);
    },

    delete: function(req, res) {
        var id = req.params.id;
        completedcourseData.splice(id, 1);
        res.json(removed);
    }
};

module.exports = completedcourses;
