function makeArray(firstArray, secondArray, maxLength) {
    const totalArray = [];

    for (let element of firstArray) {
        if (totalArray.length < maxLength) {
            totalArray.push(element);
        }
    }

    for (let element of secondArray) {
        if (totalArray.length < maxLength) {
            totalArray.push(element);
        }
    }

    return totalArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []