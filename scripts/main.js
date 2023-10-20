// window.onload = handleOnLoad;

// function handleOnLoad() {}

// function handleAddOnClick() {}

// accepts decimals, 7% is incorrect while .07 is correct
function calculateMortgage(principal, interestRate, loanLengthYears) {
  const monthlyInterestRate = interestRate / 12;
  const numberOfPayments = loanLengthYears * 12;
  const monthlyPayment =
    principal *
    ((monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) /
      ((1 + monthlyInterestRate) ** numberOfPayments - 1));
  const totalPayed = monthlyPayment * 12 * loanLengthYears;
  const totalInterest = totalPayed - principal;

  let data = {};
  data.monthlyPayment = monthlyPayment.toFixed(2);
  data.totalInterest = totalInterest.toFixed(2);
  return data;
}

console.log(calculateMortgage(53000, 7.625 / 100, 15));

function calculatateFutureCD(deposit, interestRate, numYears) {
  const numCompounds = 365; //daily
  const futureWorth =
    deposit * (1 + interestRate / numCompounds) ** (numCompounds * numYears);
  const totalInterest = futureWorth - deposit;

  let data = {};
  data.totalInterest = totalInterest.toFixed(2);
  data.futureWorth = futureWorth.toFixed(2);
  return data;
}

console.log(calculatateFutureCD(1000, 1.75 / 100, 5));
