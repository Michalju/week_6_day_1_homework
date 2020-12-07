//Epsiode 1:
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };

//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }

//   const verdict = declareMurderer();
//   console.log(verdict);

//Prediction: Miss Scarlet
//######################################################################################

//Epsiode 2:
// const murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Prediction: thought Professor Plum will be returned but it got error which is correct
//######################################################################################


//Epsiode 3:
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
//Prediction: First verdict: Mrs. Peacock, Second verdict: Professor Plum
//######################################################################################