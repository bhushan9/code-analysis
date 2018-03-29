traverseWithParents = function (object, visitor, level) {
    var key, child;

    visitor.call(null, object);

    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            if (typeof child === 'object' && child !== null && key != 'parent') {
                child.parent = object;
                child.level = level;
                traverseWithParents(child, visitor, level + 1);
            }
        }
    }
}

module.exports = traverseWithParents;
