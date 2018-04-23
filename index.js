// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(x => x.toLowerCase())
};

function nameToAttributes(arr){
  return arr.map(function(x) {
    const first = x.split(" ")[0];
    const last = x.split(" ")[1];

    return {firstName: first, lastName: last};
  });
};

function attributesToPhrase(arr){
  return arr.map(function(x) {
  return (`${x.name} is from ${x.hometown}`);
  });
};
