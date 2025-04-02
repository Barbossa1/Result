const num = 1;
console.log("Number: ", num, typeof num);

const someText = "fish";
console.log("Some text: ", someText, typeof someText);

const trueOrFalse = true;
console.log("True or false: ", trueOrFalse, typeof trueOrFalse);

const empty = null;
console.log("Empty: ", empty, typeof empty);

const vague = undefined;
console.log("Vague: ", vague, typeof vague);

const computer = {
    'motherBoard': 'MSI',
    'CPU': 'Intel',
    'GPU': 'Nvidia'
};
console.log("Computer: ", computer, typeof computer);

const largeNumber = 5n;
console.log("Large number: ", largeNumber, typeof largeNumber);

const identifier = Symbol("id");
console.log("Identifier: ", identifier, typeof identifier);