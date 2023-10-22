import { calculateOrdinaryAnnuity} from "./calculations.js";
import { attachValidator, validify } from "./utilities.js";

//Inputs
const monthlyPayout = document.getElementById("monthlyPayout");
const annualInterestRate = document.getElementById("interestRate");
const yearsToPayout = document.getElementById("yearsToPayout");
//Outputs
const presentValueAnnuity = document.getElementById("presentValueAnnuity");
//Buttons
const calculateBtn = document.getElementById("calculateBtn");

//Only calculate when inputs are valid
function calculate() {
  
  if (
    monthlyPayout.checkValidity() &&
    annualInterestRate.checkValidity() &&
    yearsToPayout.checkValidity()
  ) {
    validify(monthlyPayout, annualInterestRate, yearsToPayout);
    animateSending();
    const results = calculateOrdinaryAnnuity(
      Number(monthlyPayout.value),
      Number(annualInterestRate.value) / 100,
      Number(yearsToPayout.value)
    );
    presentValueAnnuity.value = results.presentValueAnnuity;
  } else {
    //Reset results to default value if input is invalid and mark invalid
    validify(monthlyPayout, annualInterestRate, yearsToPayout);
    presentValueAnnuity.value = "";
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
