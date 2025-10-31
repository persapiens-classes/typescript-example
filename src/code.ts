let animal = "horse";

switch (animal) {
  case "cow":
    animal = "dairy cow";
    break;
  case "horse":
    animal = "race horse";
    break;
  default:
    animal = "not detected";
}

console.log(`${animal}
     selected`);

console.log(animal + "\n" + "     selected");
