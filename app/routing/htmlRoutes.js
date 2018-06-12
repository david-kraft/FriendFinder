// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const path = require("path");

// ROUTING
module.exports = function(app){
    // HTML Get requests

    // Send client to /public/survey.html if client gets /survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Send client to /public/home.html if client gets anything else
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};