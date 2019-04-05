import { DaoInterface } from './dao.interface';

export class Dao <T> implements DaoInterface <T>{
    tableName : String;

    insert(object : T) : boolean{
        console.log('inserting... ');
        return true;
    }

    update(object : T) : boolean{
        return true;
    }

    delete(id:number) : boolean{
        return true;
    }

    find(id:Number) : T{
        return null;
    }

    findAll() : [T]{
        return [
             null
        ];
    }
}