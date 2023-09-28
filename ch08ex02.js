let overThirty = function (group) {
  let newArr = [];
  for (i = 0; i < group.length; i++) {
    if (group[i].age > 30) {
      newArr.push(group[i]);
    }
  }
  console.log(newArr);
};

//example

let person1 = {
  name: "a",
  age: 31,
  email: "",
};

let person2 = {
  name: "b",
  age: 10,
  email: "",
};

let person3 = {
  name: "c",
  age: 50,
  email: "",
};

let group = [person1, person2, person3];

overThirty(group);
