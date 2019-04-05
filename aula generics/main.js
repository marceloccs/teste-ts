"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./../aula classe/Student");
var person_1 = require("./../aula classe/person");
var dao_1 = require("./../aula generics/dao");
var dao = new dao_1.Dao();
var person = new person_1.Person('mike');
dao.insert(person);
var dao2 = new dao_1.Dao();
var student = new Student_1.Student('Lucifer', 66666);
dao2.insert(student);
//# sourceMappingURL=main.js.map