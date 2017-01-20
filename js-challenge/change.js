
//Tableau => ajouter l'extension .jpg

var tableau= ['bateau', 'avion', 'voiture']

for (var i=0; i<tableau.length; i++) {
    tableau[i] = tableau[i] + '.jpg';
}

console.log(tableau)


//Supprimer le premier element du tableau

var aDesRoues= ['bateau.jpg', 'avion.jpg', 'voiture.jpg']

var deleteFirstElement = aDesRoues.shift();

console.log(aDesRoues)

//Mettre les elements du tableau en majuscule et supprimer le .jpg

var screamName = ['avion.jpg', 'voiture.jpg'];
test=  screamName[0].substring(0,5).toUpperCase();
tost= screamName[1].substring(0,7).toUpperCase();
var empty =[]

empty.push(test)
empty.push(tost)

console.log(empty)