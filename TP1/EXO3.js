const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" }

//question1
const tousLesEtudiant=[...groupeA,...groupeB]
console.log(tousLesEtudiant);
// question2
const CopieA=[...groupeA,"Cheikh"]
console.log(groupeA);
console.log(CopieA);
// question3
const etudiantCopier={...etudiantBase, age: 22, ville: "Dakar"}
console.log(etudiantCopier);
//question4
const nouvelEtudiant={...etudiantBase,niveau: "L3"}
console.log(nouvelEtudiant);
//question5
const coordonnee={ville: "Dakar", pays: "Sénégal"}
const contact ={tel: "77 123 45 67", email: "diop@gmail.com"}
const profil={...coordonnee, ...contact}
console.log(profil);
