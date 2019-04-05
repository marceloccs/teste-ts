import { Person } from './person';
export class Student extends Person{
    private ra : number;

    constructor(name : String, ra : number){
        super(name);
        this.ra = ra;
    }

    public showName():void{
        console.log(`Student person name is ${super.getName()}`);
    }

    public getRa() : number{
        return this.ra;
    }

    public toString() : String{
        return "Student { "+
        "Name : " + super.getName()+ " " +
        "ra : "+this.ra + " " + 
        "}";
    }
}