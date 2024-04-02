let array = [1, 2, 3, 5, 6, 8, 9]
let newArray = []
targetSum = 8;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if ((array[i] + array[j]) == targetSum) {
            newArray.push(array[i])
            newArray.push(array[j])
            console.log(newArray)
        }
    }
}