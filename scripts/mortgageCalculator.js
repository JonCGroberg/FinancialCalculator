import { calculateMortgage } from "./calculations.js";
import { attachValidator, validify } from "./utilities.js";

//Inputs
const principal = document.getElementById("loanPrice");
const annualInterestRate = document.getElementById("interestRate");
const loanLength = document.getElementById("loanLength");
//Outputs
const monthlyPayment = document.getElementById("monthlyPayments");
const totalInterestPaid = document.getElementById("totalInterestPaid");
//Buttons
const calculateBtn = document.getElementById("calculateBtn");

//Only calculate when inputs are valid
function calculate() {
  
  if (
    principal.checkValidity() &&
    annualInterestRate.checkValidity() &&
    loanLength.checkValidity()
  ) {
    validify(principal, annualInterestRate, loanLength);
    animateSending();
    const results = calculateMortgage(
      Number(principal.value),
      Number(annualInterestRate.value) / 100,
      Number(loanLength.value)
    );
    monthlyPayment.value = results.monthlyPayment;
    totalInterestPaid.value = results.totalInterest;
  } else {
    //Reset results to default value if input is invalid and mark invalid
    validify(principal, annualInterestRate, loanLength);
    monthlyPayment.value = "";
    totalInterestPaid.value = "";
  }
}

function animateSending() {
  calculateBtn.classList.toggle("sending");
  calculateBtn.innerText = "Calculate";
  setTimeout(function () {
    calculateBtn.classList.toggle("sending");
    calculateBtn.innerText = "Calculate";
  }, 100);
}

attachValidator();
calculateBtn.onclick = calculate;
