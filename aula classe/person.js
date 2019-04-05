"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        if (name != null)
            this.name = name;
        else
            throw ("name Vaziu");
    }
    Person.prototype.toString = function () {
        return "Pessoa :{ " +
            "Name : " + this.name +
            "}";
    };
    Person.prototype.showName = function () {
        console.log("Person name is " + this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map