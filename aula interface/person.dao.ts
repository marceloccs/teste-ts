import { Person } from './../aula classe/person';
import { DaoInterface } from './dao.interface';

export class PersonDao implements DaoInterface{
    tableName : String = 'Person';

    insert(person:Person) : boolean{
        console.log('inserting... '+ person.toString());
        return true;
    }

    update(person:Person) : boolean{
        return true;
    }

    delete(id:number) : boolean{
        return true;
    }

    find(id:Number) : Person{
        return null;
    }

    findAll() : [Person]{
        return [
            new Person('Lucifer')
        ];
    }
}