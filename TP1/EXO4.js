// Question1
function additionner(...nombres)
{
    let somme=0;
    for(let nombre of nombres)
    {
        somme+=nombre;
    }
    return somme;
}
console.log(additionner(2,3));
console.log(additionner(2,3,4,5));


// Question2
const afficherPremierEtAutres = (premier, ...autres) => {
    console.log(premier);
    console.log(autres);
}
afficherPremierEtAutres(1, 2, 3, 4, 5);
 
// Question3
const creerFiche = (nom, filiere, ...competences) => {
    return {
        nom,
        filiere,
        competences
    };
}
console.log(creerFiche("John", "Informatique", "JavaScript", "Python", "SQL"));

// Question4

// Réponse: Le paramètre rest doit être placé à la fin de la liste des paramètres car il capture tous les arguments restants sous forme de tableau.
// Si le paramètre rest était placé avant d'autres paramètres, il capturerait tous les arguments, y compris ceux qui devraient être passés aux paramètres précédents