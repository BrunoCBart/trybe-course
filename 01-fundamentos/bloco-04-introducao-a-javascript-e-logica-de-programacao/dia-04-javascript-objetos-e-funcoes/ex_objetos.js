let name = "Marta";
let lastName = "Silva";
let age = 34;
let medals = { golden: 2, silver: 3 };

console.log(`"A jogadora ${name} ${lastName} tem ${age} anos de idade".`);
medals.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(medals.bestInTheWorld);
const times = medals.bestInTheWorld;
console.log(
  `A jogadora ${name} ${lastName} foi eleita a melhor do mundo ${times.length} vezes`
);

console.log(
  `A jogadora possui ${medals.golden} medalhas de ouro e ${medals.silver} medalhas de prata`
);
