const exchangeRate = 3886.26;

// Currency Convertor function
function currencyConvertor(amount=0, rate=0){
  // Instructions for the function
  let newAmount = amount * rate;
  if(newAmount == 0 || rate == 0){
    return "Either Amount OR Exchange Rate is missing."
  }
  return newAmount;
}

function Convertor(){
  const amountToConvert = document.getElementById("amount").value;
  let newAmount = currencyConvertor(amountToConvert, exchangeRate)
  document.getElementById("result").innerHTML = newAmount;
}
