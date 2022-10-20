//import {Login, User} from './interface';
import * as UserLogin from './interface';
interface Address{
    street : string;
    city : string;
    state : string;
    pin : string;
};

class Employee implements UserLogin.Login {
    #id: number;

    protected name: string; //not visible to the public instance

    address: Address ;

    static getEmployeeCount(): number{ 
        return 50;
    } //can't access on an instance

    constructor(id: number, name: string, address: Address){
        this.address = address;
        this.#id = id;
        this.name = name;
    }

    Login(): UserLogin.User {
        return {name: "john", age: 25, id: 1, email: ""};
    }

    getNamewithAdress(): string{
        //return this.name + " " + this.address;
        return `${this.name} stay at ${this.address}`;
    }

    get empId() : number {
        return this.#id
    }

    set empId(id: number){
        this.#id = id;
    }

}

let john = new Employee(1, 'John', {street: 'ABC', city: 'Bangalore', state: 'Kernataka', pin:'54600'});
Employee.getEmployeeCount();

john.empId = 100;
console.log(john.empId);

class Manager extends Employee{
    constructor(id: number, name: string, address: Address){
        super(id,name,address);
    }

    //overwrite the fonction
    getNamewithAdress(): string{
        //return this.name + " " + this.address;
        return `${this.name} is a manager at ${this.address}`;
    }

}

let address = john.getNamewithAdress();
//john.id = 1;
//john.name = 'John';
//john.address = 'norway 72';

console.log(address);

//let mike = new Manager(2, "Mike", "Saint-Louis");
//console.log(mike.getNamewithAdress());