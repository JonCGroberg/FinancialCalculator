// window.onload = handleOnLoad;

// function handleOnLoad() {}

// function handleAddOnClick() {}

function calculateMortgage(principal, interestRate, loanLengthYears) {
  let data = {};
  const monthlyInterestRate = interestRate / 12;
  const numberOfPayments = loanLengthYears * 12;
  const totalCompoundInterest = (1 + monthlyInterestRate) ** numberOfPayments;

  const monthlyPayment =
    principal *
    ((monthlyInterestRate * totalCompoundInterest) /
      (totalCompoundInterest - 1));
  const totalPayed = monthlyPayment * 12 * loanLengthYears;

  data.monthlyPayment = monthlyPayment.toFixed(2);
  data.totalInterest = (totalPayed - principal).toFixed(2);

  return data;
}

function calculateMortgage(principal, interestRate, loanLengthYears) {
  const monthlyInterestRate = interestRate / 12;
  const numberOfPayments = loanLengthYears * 12;
  const monthlyPayment =
    principal *
    ((monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) /
      ((1 + monthlyInterestRate) ** numberOfPayments - 1));
  const totalPayed = monthlyPayment * 12 * loanLengthYears;

  let data = {};
  data.monthlyPayment = monthlyPayment.toFixed(2);
  data.totalInterest = (totalPayed - principal).toFixed(2);
  return data;
}

console.log(calculateMortgage(53000, 7.625 / 100, 15));
