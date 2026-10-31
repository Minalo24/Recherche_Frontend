
// question 1
function CalculMoy(note1,note2,note3)
{
  return(note1+note2+note3)/3;
}
console.log(CalculMoy(12,14,16));
console.log(CalculMoy(10,4,6));

// question2
function Admis(moyenne)
{if(moyenne>=10)
    {return true;}
 else
    {return false;}
}
console.log(Admis(15));
console.log(Admis(8));

// Question3
function CalculerPrix(prixHt,tauxTva=0.18)
{
  return prixHt * (1 + tauxTva / 100);
}
console.log(CalculerPrix(10000));
console.log(CalculerPrix(50000,0.20));

// Question 4
const convertirMinutes = (heures) => {
  return heures * 60;
};

console.log(convertirMinutes(2));
console.log(convertirMinutes(1.5));






