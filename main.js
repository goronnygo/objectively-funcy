// Your code here.
function getFirstName(person){
  return person.firstName;
}

function getLastName(person){
  return person.lastName;
}

function getFullName(full){
  return full.firstName + ' ' + full.lastName;
}

function setFirstName(person, name){
  person.firstName = name;
}

function setAge(person, age1){
  person.age = age1;
}

function giveBirthday(person){
  if (person.age === undefined){
    person.age = 1
  }else person.age = person.age + 1;
  
}

function marry(pers1,pers2){
  pers1.married = true;
  pers2.married = true;
  pers1.spouseName = getFullName(pers2);
  pers2.spouseName = getFullName(pers1);
}

function divorce(pers1,pers2){
  pers1.married = false;
  pers2.married = false;
  delete pers1.spouseName;
  delete pers2.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
