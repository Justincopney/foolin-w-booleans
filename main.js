/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num) {
  if (num > 5) {
    return true
  }
  else {
    return false
  }
}

function isNewTopScore(newScore, currentTopScore) {
  let isNewTopScore = newScore > currentTopScore;
  return isNewTopScore;
}

function isInDanger(grade) {
  let isLowScore = grade >= 60 && grade <=71;
  return isLowScore;
}

function isCoasting(grade) {
  let isCoasting = grade >=72 && grade <= 83;
  return isCoasting;
}

function isSucceeding(grade) {
  let isSucceeding = grade >= 84 && grade <= 92;
  return isSucceeding;
}

function isFailing(grade) {
  let isFailing = grade < 60;
  return isFailing;
}

function isAcing(grade) {
  let isAcing = grade > 92;
  return isAcing;
}

function isStudent(str) {
  return str === 'student';
}

function isTeacher(str) {
  return str === 'teacher';
}

function isAdmin(str) {
  return str === 'admin';
}

function isElementary(str) {
  return str === 'elementary';
}

function areDifferentPeople(name1, name2) {
  return name1 !== name2;
}

function isMiddleSchoolTeacher(str, gradeLevel) {
  let isMiddleSchool = gradeLevel >= 6 && gradeLevel <= 8;
  let isBoth = isMiddleSchool && isTeacher(str);
  return isBoth;
  // return gradeLevel >= 6 && gradeLevel <= 8 && role === 'teacher'
}

function notAnElementarySchoolAdministrator(schoolLevel, role) {
  let isBoth = isAdmin(role) && isElementary(schoolLevel)
  return !isBoth;
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
