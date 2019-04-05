import { Person } from './../aula classe/person';
import { PersonDao } from './person.dao';

let personDao : PersonDao = new PersonDao();
let person : Person = new Person ("Giovanni");

personDao.insert(person);