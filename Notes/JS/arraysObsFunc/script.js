console.log("Javascript is running...");

let mixArray = [10,"string", [2,3,4], {myKey: "myValue"}, true];

console.log(mixArray);

console.log(mixArray[0]);

mixArray.push("dino");

console.log(mixArray);

console.log(mixArray.slice(0,3));

mixArray.pop();

console.log(mixArray);

mixArray.shift();

console.log(mixArray);

mixArray.unshift();

console.log(mixArray);

console.log(mixArray.length);

console.log(mixArray[mixArray.length]);

console.log(mixArray[mixArray.length - 1]);

console.log(mixArray.reverse());

console.log(mixArray[mixArray.length - 1]);

console.log(mixArray.includes("string"));

