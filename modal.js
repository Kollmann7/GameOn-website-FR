function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements validate,commit,close
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelectorAll(".close");
const btnValidate = document.getElementById("validation-form");
const modalValidate = document.getElementById("thanks");
const closeRegister = document.getElementById("btn-close-valid");
const closeThanks = document.getElementById("thanks-close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalclose.forEach((btn) => btn.addEventListener("click", closeModal));
//Validation form event
btnValidate.addEventListener('click', validate);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form function
function closeModal() {
  modalbg.style.display = "none";
}
function registerOpen(){
  modalValidate.style.display = "block";
}
//function modal register close
function registerClose(){
  modalValidate.style.display = "none";
}

//close register
closeRegister.addEventListener('click', registerClose);
closeThanks.addEventListener('click', registerClose);

//DOM Elements FORM
const form = document.getElementById("form");
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const birthDate = document.getElementById('birthdate');
const email = document.getElementById('email');
const quantityTournament = document.getElementById ('quantity');
const checkBoxes = document.querySelectorAll(".loc-checkboxes");
const arrayBoxes = Array.from (checkBoxes);
const conditions = document.querySelectorAll('.con-checkboxes');
const arrayConditions = Array.from (conditions);

//Regex
const nameRegex = /^((?![0-9~!@#$%^&*()_+=-[]{};:"\/<>?]).)+$/;
const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const emailRegex = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const tournamentRegex = /^[0-9]+$/;

//First name verification
function validateFirstName(){
  const firstNameForm = document.getElementById("first-name-form");
  if (firstName.value.trim() == ""){  
    firstNameForm.setAttribute("data-error", "Le champ doit être remplis");
    firstNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else if (!nameRegex.test(firstName.value)){
    firstNameForm.setAttribute("data-error", "Le prénom ne respecte pas les caratères demandées");
    firstNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else if (firstName.value.trim().length < 2){
    firstNameForm.setAttribute("data-error", "Le champ doit avoir plus de deux caractères");
    firstNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    firstNameForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Last name verification
function validateLastName(){
  const lastNameForm = document.getElementById("last-name-form");
  if (lastName.value.trim() == ""){
    lastNameForm.setAttribute("data-error", "Le champ doit être remplis");
    lastNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else if (!nameRegex.test(lastName.value)){
    lastNameForm.setAttribute("data-error", "Le nom ne respecte pas les caratères demandées");
    lastNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else if (lastName.value.trim().length < 2){
    lastNameForm.setAttribute("data-error", "Le champ doit avoir plus de deux caractères");
    lastNameForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    lastNameForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Email verification
function validateEmail(){
  const emailForm = document.getElementById("email-form");
  if (email.value.trim() == ""){
    emailForm.setAttribute("data-error", "Le champ doit être remplis");
    emailForm.setAttribute("data-error-visible","true");
    return false;
  }
  else if (!emailRegex.test (email.value)){
    emailForm.setAttribute("data-error", "Vous devez renseignez une adrresse mail vailde");
    emailForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    emailForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Birthday today date
function isBeforeToday(birthDate) {
  let today = new Date();
  return birthDate <= today;
}
//Birthday verification
function validateBirthDay(){
  const birthDateForm = document.getElementById("birthdate-form");
  if (birthDate.value == ""){
    birthDateForm.setAttribute("data-error", "Le champ doit être remplis");
    birthDateForm.setAttribute("data-error-visible","true");
  return false;
  }
  else if (!dateRegex.test (birthDate.value)){
    birthDateForm.setAttribute("data-error", "Vous devez renseignez une date valide");
    birthDateForm.setAttribute("data-error-visible","true");
  return false;
  }
  else if (!isBeforeToday(new Date(birthDate.value))){
    birthDateForm.setAttribute("data-error", "La date doit être antérieur a celle d'aujourd'hui");      //We choose to stop the birthdate before today because we don't want "unvalid" birhtdate
  }
  else if (new Date(birthDate.value) < new Date(1900, 01, 01)){
    birthDateForm.setAttribute("data-error", "La date doit être supérieur a 1900");                     //We choose this date as minimun because it's we be unlikly to have a people that older than that
    birthDateForm.setAttribute("data-error-visible","true");
  }
  else{
    birthDateForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Tournament verification
function validateQuantityTournament(){
  const tournamentForm = document.getElementById("tournament-form");
  if (quantityTournament.value.trim()== ""){
    tournamentForm.setAttribute("data-error", "Le champ doit être remplis");
    tournamentForm.setAttribute("data-error-visible","true");
    return false;
  }
  else if (!tournamentRegex.test(quantityTournament.value)){
    tournamentForm.setAttribute("data-error", "Le champ doit comporter seulement des chiffres");
    tournamentForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    tournamentForm.setAttribute("data-error-visible","false");
    return true;
  }
}

//Check verification of the checkboxes
function isChecked(checkBoxe){
  return checkBoxe.checked;
};
//Validation checkboxes
function validateCheckBoxes(){
  const locationForm = document.getElementById("location-form");
  if (!arrayBoxes.some(isChecked)){
    locationForm.setAttribute("data-error", "Vous devez remplir au moins une case");
    locationForm.setAttribute("data-error-visible","true");
    return false;
  }
  else{
    locationForm.setAttribute("data-error-visible","false");
    return true;
  }
}

// Validation conditions
function validateConditions(){
  const conditionForm = document.getElementById("condition-form");
  if(!arrayConditions.some(isChecked)){
    conditionForm.setAttribute("data-error", "Vous devez accepter les conditions");
    conditionForm.setAttribute("data-error-visible","true");
  }
  else{
    conditionForm.setAttribute("data-error-visible","false");
    return true;
  }
}

function validate(e){
  e.preventDefault();
  const FirstNameValid = validateFirstName();
  const LastNameValid = validateLastName();
  const EmailValid = validateEmail();
  const BirthDayValid = validateBirthDay();
  const QuantityTournamentValid = validateQuantityTournament();
  const CheckBoxesValid = validateCheckBoxes();
  const ConditionsValid = validateConditions();

  if(FirstNameValid && LastNameValid && EmailValid && BirthDayValid && QuantityTournamentValid && CheckBoxesValid && ConditionsValid){
    modalSubmit();
  }
}

//Function modal submit
function modalSubmit(){
  closeModal();
  registerOpen();
}