let array = [9, 2, 1, 5, 8]
let newArray = []

for (let i = 0; i < array.length; i++) {
    let newLowest = array[i];
    for (let j = i; j < array.length; j++) {
        if (array[j] < newLowest) {
            newLowest = array[j];
        }
    }
    array[array.indexOf(newLowest)] = array[i]
    array[i] = newLowest
}

for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] ** 2)
}

console.log(newArray)