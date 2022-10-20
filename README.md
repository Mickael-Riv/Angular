# Installation et Apprentissage Angular
freeCodeCamp
## Configuration du systeme
**Verification de l'installation de node**
`node -v`

**Création du package**
`npm init`

**installation de typescipt**
`npm i typesctipt`

**Creation de la d"pendance typescript**
`tsc init`

## Apprentissage de TS
Création d'un fichier datatype.ts et de test.js comme comparaison.

JS n'est pas typer, cela crée des problème avec certaine fonctions. Cela ne fonctionne pas en TypeScript qui est fortement typer.

**Compilation en typescript**
`tsc`

**Execution du code**
node _nom_du_fichier_ts_

### Vocabulary

**SPA** = Single Page Applications utiliser dans Angular, React, Vue
SPA ne créer pas de requete server pour chaque requete URL


### Typescript Avantage
**Les fonctions sur les Strings**
Un nombre conséquent de fonction est disponible sur les chaine de caractères.
```
    let Lname = "test";
	Lname.toUpperCase();
```
**Definition du type d'une variable**
`let age : number;`

**Fonction sur les numbers**
```
	age.toExponential();
	age.toFixed();...
```
**String to Int**
```
	let dob = 25;
	parseInt(dob);
```
**Definition d'une liste typé**
```
	let empList : string[];
	let numList : Array<number>;
```

**Array Fonctions**
```
numList.filter((num)=> num>2);
numList.find((num)=> num===2);
numList.reduce((acc, num)=> acc+num);
```

**Enum**
c'est une liste / structure
```
enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Blue;
```
les enum peuvent etres declarer comme constante, permet de limiter le code en production car seule la couleur choisi sera intergrer.

**Les tuples**
`let swapNumbs: [number,number];`

**Any**
On peut déclarer une variable de type any
`let department: any;`
On peut toute type de valeur à cette variable
***any*** est le type par défaut

**Les fonctions**
```
function add(num1: number, num2: number): number{
    return num1 + num2;
}

const sub = (num1: number, num2: number): number => num1 - num2;
```
Les fonction sont toujours typé

Si on ne définit pas de type de retour, lz valeur par défaut sera void

**Les parametres optionnel**
```
function add(num1: number, num2: number, num3?: number): number{
    return num3? num1 + num2 + num3 : num1 + num2;
}
```

**Les parametres par défaut**
```
const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;
```

**Nombre non définit de paramètres**
```
function add2(num1: number, num2: number, ...num3: number[]): number{
    return num1 + num2 + num3.reduce((a, b) => a+b,0);
}
```
**Classes**
***Définitions de la classe***
```
class Employee {
    id!: number;

    name!: string;

    address!: string;

}
```
En inscrivant un ! apres le nom de notre attribut, on n'est pas obliger de crée de constructeur.
Sinon notre classe ressemblerais à sa :

```
class Employee {
    id: number;

    name: string;

    address: string;

    constructor(id: number, name: string, address: string){
        this.address = address;
        this.id = id;
        this.name = name;
    }

}

```

**Les méthodes**
Il s'agit de fonctions définit dans les classes :
```
    getNamewithAdress(): string{
        return this.name + " " + this.address;
    }
```

**acces of attribute**
Private : # ou private
`private id: number or #id: number`

Protected : protected
`protected name: string`

Static : static (utiliser en général pour les fonctions)
```
    static getEmployeeCount(): number{
        return 50;
    }
```

**getters et setters**
```
    get empId() : number {
        return this.#id
    }

    set empId(id: number){
        this.#id = id;
    }
```
Cela permet des affectation et récupération :
```
john.empId = 100;
console.log(john.empId);
```

**Les interfaces**
Permet de définir une liste de méthode et d'attribut implémentable
```
interface User{
    name: string;
    age : number;
    id: number;
    email: string;
}

let user: User = {name: "john", age: 25, id: 1, email: ""};
```

**Export une interface**
```
export interface Login{
    Login(): User;
}
```