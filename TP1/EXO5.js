const etudiantL2 = {
  id: 104,
  prenom: "Aminata",
  nom: "Fall",
  notes: [13, 16, 12],
  filiere: "IAGE"
};

// Question1
const extraireIdentite = (etudiant) => {
    const {nom , prenom , filiere} = etudiant 
    return {nom , prenom, filiere}
}

const nouveau = extraireIdentite(etudiantL2);
console.log(nouveau);

// Question2
const calculerMoyenneNotes = (notes) => {
    if (notes.length === 0) {
        return 0;
    }
    const somme = notes.reduce((acc, note) => acc + note, 0);
    return somme / notes.length;
}

console.log(calculerMoyenneNotes(etudiantL2.notes));

// Question3
const ajouterNote = (etudiantL2, nouvelleNote) => {
    return {...etudiantL2, notes: [...etudiantL2.notes, nouvelleNote]};
};

console.log(ajouterNote(etudiantL2, 18));
console.log(etudiantL2);

// Question4
const creerResume = (etudiantL2, ...options) => {
    const {nom, prenom, filiere} = etudiantL2;  // cette ligne déstructure l'objet etudiantL2 en variables nom, prenom, filiere et rest afin de pouvoir les utiliser dans le retour de la fonction
    return {nom, prenom, filiere, moyenne: calculerMoyenneNotes(etudiantL2.notes), options}
} 

console.log(creerResume(etudiantL2, "option1", "option2", "option3"));
console.log(etudiantL2);