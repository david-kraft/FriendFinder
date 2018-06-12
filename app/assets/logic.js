const prompts = require("../data/prompts.json");

for (let i = 0; i < prompts.length; i++) {
    let identifier = array[i].identifier;
    let prompt = array[i].prompt;
    $("#promptBank").append("<div class=\"form-group\" id=\"" + identifier + "\"></div>");
    $("#" + identifier).append("<label for=\"" + identifier + "\">" + prompt + "</label>");

    for (let j = 1; j < 6; j++) {
        $("#" + identifier).append("<div class=\"form-check form-check-inline\"><input class=\"form-check-input\" type=\"radio\" name=\"" + identifier + "Options\" id=\"" + identifier + "Radio" + j + "\" value=\"option1\"><label class=\"form-check-label\" for=\"" + identifier + "Radio" + j + "\">" + j + "</label></div>");
        
    }
}