
// // const voterOneName = "Sandra";
// // const voterOneAge = 42;
// // const voterOneDidVote = true;

const voterOne = {
  name: "Sandra",
  age: 42,
  didVote: true,
  vote: function(string){
    console.log(`${this.name} voted!`);
  }
};

// // const propertyName = 'age';

// // const age = voterOne.age; // dot notation
// // const age2 = voterOne['age']; // square bracket notation
// // const age3 = voterOne[propertyName]; // square bracket notation


// // const voterTwoName = "Bob";
// // const voterTwoAge = 4;
// // const voterTwoDidVote = true;

const voterTwo = {
  name: "Bob",
  age: 4,
  didVote: true,
  vote: function(string){
    console.log(`${this.name} voted!`);
}
};

// // const voterThreeName = "Andrew";
// // const voterThreeAge = 24;
// // const voterThreeDidVote = false;

const voterThree = {
  name: "Andrew",
  age: 24,
  didVote: false,
  vote: function(string){
    console.log(`${this.name} voted!`);
  }
};

// // const voterFourName = "Andrew";
// // const voterFourAge = 24;
// // const voterFourDidVote = true;
// // const voteForBirthday = '1999-01-01';

const voterFour = {
  name: "Andrew",
  age: 24,
  didVote: true,
  birthday: '1999-01-01',
  vote: function(string){
    console.log(`${this.name} voted!`);
  }
};


// // How Many People Voted
// // let numVoters = 0;
// // if (voterOneDidVote) {
// //   numVoters = numVoters + 1;
// // }


const setOfVoters = [voterOne, voterTwo, voterThree, voterFour];

let numVoters = 0;
for (voter of setOfVoters) {
  console.log('name', voter.name);
  voter.vote('monkeyfuzz');  // console.log('monkeyfuzz');
  if (voter.didVote) {
    numVoters = numVoters + 1;
  }
}

// console.log(`The number of people who voted was: ${numVoters}`);

let yy = 16;
console.log(`yy before:`, yy);

function addTen(num){
  let result = num + 10;
  console.log(`result:`, result);
  num = num + 66;
  return result;
}

const answer = addTen(yy);
console.log(`answer:`, answer);
console.log(`yy after:`, yy);



// here is an object
const myObject = {
  value: 42,
  colour: 'black'
};
console.log('object before:', myObject);

function display(object){
  console.log('display:', object.value);
  const retVal = object.value;
  object.value = 'monkeyfuzz';
  return retVal;
}

const response = display(myObject);
console.log(`the response:`, response);
console.log('object after:', myObject);


// looping over object properties

for (property in voterFour){
  console.log(`property:`, property);
  console.log('value::', voterFour[property]);
}
