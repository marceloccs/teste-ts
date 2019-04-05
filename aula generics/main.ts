import { Student } from './../aula classe/Student';
import { Person } from './../aula classe/person';
import { Dao } from './../aula generics/dao';

let dao : Dao<Person> = new Dao<Person>();
let person : Person = new Person ('mike');

dao.insert(person);

let dao2 : Dao<Student> = new Dao<Student>();
let student : Student = new Student ('Lucifer',66666);
dao2.insert(student);