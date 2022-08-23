//// STRING METHODS ///////////////

const checkMiddleSeat = seat => {
  //   console.log(seat.length);
  // extract last item
  const isMiddle = seat.slice(-1);
  //   console.log(isMiddle);
  //   console.log(typeof isMiddle);
  return isMiddle === 'B' || isMiddle === 'E'
    ? 'BadLuck for getting middle seat'
    : 'congrats on your Good luck!!';
};

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('11C'));
console.log(checkMiddleSeat('1E'));

// convert jOnas to Jonas

const capitalize = str => {
  const lowerCaseStr = str.toLowerCase();
  const capitalizedStr = lowerCaseStr[0].toUpperCase() + lowerCaseStr.slice(1);

  return capitalizedStr;
};
const upperArray = [];
const camelCase = function (str) {
  const trimItem = str.trim();
  let [firstName, lastName] = trimItem.split('_');

  lastName = lastName[0].toUpperCase() + lastName.slice(1);

  const formattedWord = [firstName, lastName].join('');

  return formattedWord;
};

const formattedArray = [];
const capitalizedArray = array => {
  const splitedArray = array.split('\n');
  console.log(splitedArray);
  for (const item of splitedArray) {
    formattedArray.push(camelCase(item));
  }
};

// CSSKeyframeRule
capitalizedArray('nischal_puri         \n        nik_puri\n dipendra_chau');

console.log(formattedArray);

for (const item of formattedArray) {
  console.log(item);
}
