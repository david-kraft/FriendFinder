// Declare dependencies
const app = require("express");
const bodyParser = require("body-parser");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point server to route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.get("/all-pets", function (req, res) {
    // Handlebars requires an object to be sent to the index handlebars file.

    // 2. Loop through the animals, and send those that are pets to the index handlebars file.
    var data = {
        animals: []
    };

    for (var i = 0; i < animals.length; i += 1) {
        // Get the current animal.
        var currentAnimal = animals[i];

        // Check if this animal is a pet.
        if (currentAnimal.pet) {
            // If so, push it into our data.animals array.
            data.animals.push(currentAnimal);
        }
    }

    res.render("index", data);
});

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// DATA
require("./app/data/friends")(app)

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});