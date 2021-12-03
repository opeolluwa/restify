"use strict";
var ssr_database = /** @class */ (function () {
    //takes database and object representing database fields name
    function ssr_database(database) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        var columns = [];
        for (var _a = 0, fields_1 = fields; _a < fields_1.length; _a++) {
            var elem = fields_1[_a];
            var str = columns.push(elem);
        }
        return columns;
    }
    return ssr_database;
}());
var rx = new ssr_database("rrr", "fgvp9w", "fdu n]n-yy9f", "ybw fd[ '0ywiog");
console.log(rx);
module.exports = ssr_database;
