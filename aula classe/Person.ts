export class Person {
    private name : String;
    constructor(name : String){
        if(name !=null)
            this.name = name;
        else
            throw ("name Vaziu");
    }

    public toString() : String{
        return "Pessoa :{ "+
        "Name : " + this.name +
        "}";
    }

    public showName():void{
        console.log(`Person name is ${this.name}`);
    }

    public getName() : String{
        return this.name;
    }
}