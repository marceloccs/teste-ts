"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, ra) {
        var _this = _super.call(this, name) || this;
        _this.ra = ra;
        return _this;
    }
    Student.prototype.showName = function () {
        console.log("Student person name is " + _super.prototype.getName.call(this));
    };
    Student.prototype.getRa = function () {
        return this.ra;
    };
    Student.prototype.toString = function () {
        return "Student { " +
            "Name : " + _super.prototype.getName.call(this) + " " +
            "ra : " + this.ra + " " +
            "}";
    };
    return Student;
}(person_1.Person));
exports.Student = Student;
//# sourceMappingURL=Student.js.map