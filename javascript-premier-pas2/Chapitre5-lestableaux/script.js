let fruits = ["pomme","banane", "cerise"];
console.log("tableau initial: ", fruits);

fruits.push("orange");
console.log("Apres push : ", fruits);

fruits.pop("orange");
console.log("Apres pop: ", fruits);

fruits[1] = "kiwi";
console.log("Apres modification : ", fruits);

fruits.unshift("fraise");
console.log("Apres unshift : ", fruits);

fruits.shift("fraise");
console.log("Apres shift: ", fruits);

fruits.splice(1, 0, "ananas");
console.log("Apres splice : ", fruits);

console.log("Boucle for: ");
for(let i = 0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}

let produits = [
    {nom:"stylo", prix: 5},
    {nom: "cahier", prix: 15},
    {nom: "crayon", prix: 3},
];
console.log("Liste des produits :");
produits.forEach((p) => console.log(`${p.nom} → ${p.prix} DH`));