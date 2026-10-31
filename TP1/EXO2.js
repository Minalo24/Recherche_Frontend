const etudiant = {
  id: 2026,
  nom: "Ndiaye",
  prenom: "Moussa",
  filiere: "IAGE",
  niveau: "L2",
  ville: "Dakar"
};
const resultats = [15, 11, 17, 13, 16];
console.log(resultats);
// question1
const {nom,prenom,filiere}=etudiant;
console.log(nom,prenom,filiere);
//question2
const {niveau:classe}=etudiant;
console.log(classe);
//question3
const [note1,note2,,,note5]=resultats;
console.log(note1,note2,note5);
//question4
const[a,,c]=resultats;
console.log(a,c);
//question5
const{email="inconnu"}=etudiant;
console.log(email);
//question6
console.log(`L'étudiant ${prenom} ${nom} est en ${classe} de la filière ${filiere}.`);