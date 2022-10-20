# Installation de Angular
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