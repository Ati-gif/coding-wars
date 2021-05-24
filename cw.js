const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}

const tacos = [taco, taco1, taco2]

// write a function that takes an tacoOBJ and a id

// and returns a new object with name changed to "changed"

const updateName = (id, newName) => {
  return tacos.map((taco) => {
    if (taco.id !== id) {
      return taco;
    } else {
      return { ...taco, name: newName };
    }
  });
};
let updatedTacos = updateName(1, "changed");
console.log(tacos);
console.log(updatedTacos);

 // write a function that takes an tacoOBJ and return some

 // formatted html (will be a string technically)

const renderTacos = () => {
  return tacos.map((taco) => {
    return `<li>${taco.name}</li>`;
  });
};
let tacoHtml = renderTacos();
console.log(tacos);
console.log("tacoHtml", tacoHtml);


// write a function that takes an tacoOBJ and return formatted price with

 // .00 

const arrayPrice = ['$18.00', '$20.00', '$30.00'];
const iterator = arrayPrice.values();

for (const value of iterator) {
  console.log(value);

// // create a new array where all of the prices is formatted with .00

const arrayPrice = ['$18.00', '$20.00', '$30.00'];
const iterator = arrayPrice.values();

for (const value of iterator) {
  console.log(value);

// write a function that takes an array and logs each item in the array

//hint forEach
tacoArray.forEach((taco) => {
    if (taco % 2 == 0) 
    console.log(taco);
})

// use the find method to return the object with id:1
 tacos = tacoArray[id]
  return tacosArray[0]

// return a new array with all prices greater than 19
function findGreater(tacos, elem) {

  return tacos.filter((price) => {
    return price > elem
  })
}
console.log(findGreater([18, 20, 30], 19))

// return a new array with a 'about' key where it is a combo of name price and about
 let hotdogs = [
  { name: "Original", price: 6.00, about:'Cool' },
  { name: "Chili", price: 10.00, about:'Spicy'}];
      
  hotdogs.forEach(v => {console.log(v[" name"]+ " hotdogs cost $"+v[" price"]+v[" about"]+" each")});

//CRUD
//READ (array of obj to array of html) 
const renderTacos = () => {
  return tacos.map((taco) => {
    return `<li>${taco.name}</li>`;
  });
};
let tacoHtml = renderTacos();
console.log(tacos);
console.log("tacoHtml", tacoHtml);

// Remove (delete a taco) 
const deleteTaco = (id) => {
  return tacos.filter((taco) => {
    return taco.id !== id;
  });
  };
  const removedTacos = deleteTaco(1);
  console.log(tacos);
  console.log(removedtacos);
// Create (add a taco) 

let newTacos = addTaco({id:4, name:'shrimp', price:35, about:'great'});
console.log(tacos)
console.log(newTacos)

//update 
const updateName = (id, newName) => {
  return tacos.map((taco) => {
    if (taco.id !== id) {
      return taco;
    } else {
      return { ...taco, name: newName };
    }
  });
};
let updatedTacos = updateName(1, "beef");
console.log(tacos);
console.log(updatedTacos);

// bonus use reduce to return the sum of prices in tacos array
let sum = 0;
tacos.forEach((taco) => {
  sum += taco.price;
});
console.log(sum);
console.log(sum / tacos.length);