const carName  = "Toyota";
let maxCarSpeed  = 666;
let carOwner  = "Barbossa";

alert(carName);
alert(maxCarSpeed);
alert(carOwner);

maxCarSpeed = randomSpeed();
carOwner = "Kansas";
console.log(maxCarSpeed);
console.log(carOwner);

maxCarSpeed = randomSpeed();
carOwner = "Arkansas";
console.log(maxCarSpeed);
console.log(carOwner);

maxCarSpeed = randomSpeed();
carOwner = "Texas";
console.log(maxCarSpeed);
console.log(carOwner);

function randomSpeed() {
    let rand = Math.random() * 500;
    return Math.floor(rand);
}