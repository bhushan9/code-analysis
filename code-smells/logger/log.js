var traverseWithParents = require('../../Traverse/traverse');


class LoggerFormat {

    constructor() {
        this.count = 0;
        this.list = [];
    }
    checkLoggerFormat (node, filepath) {
        let that = this;
        traverseWithParents(node, function(child){
            if(child.type === 'CallExpression' &&
            child.callee &&
            child.callee.object &&
            child.callee.object.object &&
            child.callee.object.object.name === 'Ember' &&
              child.callee.object.property.name === 'Logger' && child.callee.property.name === 'error' ) {
                if (child.arguments.length == 1) {
                  if (child.arguments[0].type === 'Identifier')
                  {
                    if (!that.list.includes(child.loc.start.line))
                      {
                        console.log("Format invalid at line:" + child.loc.start.line + " in file:" + filepath);
                        that.list.push(child.loc.start.line);
                        that.count += 1;
                      }
                  }

              }
              }
        });
        traverseWithParents(node, function(child){
            if(child.type === 'CallExpression' &&
            child.callee &&
            child.callee.object &&
            child.callee.object.object &&
            child.callee.object.object.type === 'ThisExpression' &&
              child.callee.object.property.name === 'logger' && child.callee.property.name === 'error' ) {
                if (child.arguments.length == 1) {
                    if (child.arguments[0].type === 'Identifier')
                    {
                      if (!that.list.includes(child.loc.start.line))
                        {
                          console.log("Format invalid at line:" + child.loc.start.line + " in file:" + filepath);
                          that.list.push(child.loc.start.line);
                          that.count += 1;
                        }
                    }

              }
              }
        });

        traverseWithParents(node, function(child){
            if(child.type === 'CallExpression' &&
              child.callee &&
              child.callee.object &&
              child.callee.object.callee &&
              child.callee.object.callee.object &&
              child.callee.object.callee.object.type === 'ThisExpression' &&
              child.callee.object.callee.property.name === 'get' &&
              child.callee.object.arguments[0].value === 'logger' && child.callee.property.name === 'error' ) {
                if (child.arguments.length == 1) {
                  if (child.arguments[0].type === 'Identifier')
                  {
                    if (!that.list.includes(child.loc.start.line))
                      {
                        console.log("Format invalid at line:" + child.loc.start.line + " in file:" + filepath);
                        that.list.push(child.loc.start.line);
                        that.count += 1;
                      }
                  }

              }
              }
        });

    }
}
module.exports = LoggerFormat;
