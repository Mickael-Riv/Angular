export interface User{
    name: string;
    age? : number; //optional property
    id: number;
    email: string;
}

let {name : userName, email}: User = {name: "john", age: 25, id: 1, email: ""};
    //permet de renommer le resultat
//user.name;
//user.email;

//userName


interface Employees extends User{
    salary : number;
}

let employee: Employees = {name: "john", id: 1, email: "", salary: 1000};

export interface Login{
    Login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
    {name: "John",id: 1,email: ""},
    {name: "John2",id: 2,email: "",},
    {name: "John3",id: 3,email: "",},
    {name: "John4",id: 4,email: "",}
]

console.log(user1);
console.log(user2);
console.log(restUsers);

//let result = restUsers.filter(user => user.id >1);

