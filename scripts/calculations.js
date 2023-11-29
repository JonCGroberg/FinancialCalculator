export { calculateFutureCD, calculateMortgage, calculateOrdinaryAnnuity };

// Calculates the monthly payment and total interest for a mortgage
// Interest rates must be in decimal form
function calculateMortgage(principal, annualInterestRate, loanLengthYears) {
  const monthlyInterestRate = annualInterestRate / 12;
  const numberOfPayments = loanLengthYears * 12;
  const monthlyPayment =
    principal *
    ((monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) /
      ((1 + monthlyInterestRate) ** numberOfPayments - 1));
  const totalPaid = monthlyPayment * 12 * loanLengthYears;
  const totalInterest = totalPaid - principal;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
  };
}

// Calculates the future worth and total interest for a certificate of deposit
// Interest rates must be in decimal form
function calculateFutureCD(deposit, annualInterestRate, numYears) {
  const numCompounds = 365; //daily
  const futureWorth =
    deposit *
    (1 + annualInterestRate / numCompounds) ** (numCompounds * numYears);
  const totalInterest = futureWorth - deposit;

  // Return an object containing the total interest and future worth
  return {
    totalInterest: totalInterest.toFixed(2),
    futureWorth: futureWorth.toFixed(2),
  };
}

// Calculates the present value of an ordinary annuity
// Interest rates must be in decimal form
function calculateOrdinaryAnnuity(
  monthlyPayout,
  annualInterestRate,
  yearsToPayout
) {
  const numberOfPayments = yearsToPayout * 12;
  const monthlyInterestRate = annualInterestRate / 12;
  const presentValueAnnuity =
    monthlyPayout *
    ((1 - (1 + monthlyInterestRate) ** -numberOfPayments) /
      monthlyInterestRate);

  // Return an object containing the present value of the annuity
  let data = { presentValueAnnuity: presentValueAnnuity.toFixed(2) };
  return data;
}
