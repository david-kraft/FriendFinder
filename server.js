// Declare dependencies
const app = require("express");
const bodyParser = require("body-parser");

// Point server to route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
