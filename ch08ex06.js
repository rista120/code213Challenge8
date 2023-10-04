let arr1 = [1, 2, 4, 6, 1, 8, 8, 2, 4, 6, 9, 5];
let arr2 = [7, 8, 9, 6, 1, 3, 7, 2];

let newArr = [];
for (i of arr1) {
  if (!newArr.includes(i)) {
    newArr.push(i);
  }
}

for (j of arr2) {
  if (!newArr.includes(j)) {
    newArr.push(j);
  }
}
console.log(newArr);
