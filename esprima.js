var esprima = require("esprima");
var options = {
    tokens: true,
    tolerant: true,
    loc: true
};
var fs = require("fs");
var recursive = require("recursive-readdir");
var traverseWithParents = require("./Traverse/traverse");
var checkLoggerFormat = require("./code-smells/logger/log");
var FileBuilder = require("./file-builder");
var FunctionBuilder = require("./function-builder");




function main() {
    recursive("./web-directory/app/mixins/phone-service",[], function (err, files) {
        for (file of files) {
            if(file.split('.')[1] ==='js'){

                complexity(file);
            }
        }
    });
}

function complexity(filePath) {
    var buf = fs.readFileSync(filePath, "utf8");
    var ast = esprima.parse(buf, options);

    let x = new checkLoggerFormat();
    traverseWithParents(ast, function(node) {
            //<---------------------------------------Ember.logger--------------------------------------->//
             x.checkLoggerFormat(node, filePath);
    });
}

main();

exports.main = main;
