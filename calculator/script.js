function calculateMaturityAmout() {
  // GET INPUT VALUES FORM THE ELEMENT
  const principle = parseFloat(document.getElementById("principle").value);
  const intersRate = parseFloat(document.getElementById("interestRate").value);
  const tenure = parseFloat(document.getElementById("tenure").value);

  //   PERFORM THE CALCULATION
  const maturityAmount = principle + (principle * intersRate * tenure) / 100;

  //   DISPLAY RESULT
  document.getElementById(
    "result"
  ).innerText = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
}

// ATTACH THE EVENT LISTENER TO THE CALCULATE BUTTON
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMaturityAmout);
