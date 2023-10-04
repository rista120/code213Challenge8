let input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

let vowels = ["A", "E", "Y", "U", "I", "O"];
let output = "";
for (letter of input) {
  if (!vowels.includes(letter.toUpperCase())) {
    output += letter;
  }
}
console.log(output);
