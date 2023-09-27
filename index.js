let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
  }

function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

function destructivelyRemoveLastCat(name) {
    cats.pop();
  }

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
  let newCats = [...cats, name];
  return newCats;
}

function removeLastCat() {
    let newCats = cats.slice();
    newCats.pop();
    return newCats;
  }

function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
  }

function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
  }