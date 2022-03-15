fetch("http://api.exchangeratesapi.io/v1/latest?access_key=760edb47c69471caf3e1acf30445d787")
.then(response=>response.json())
.then(data=>getExchangeRate(data));
function getExchangeRate(data){
  $(".dis").append((1/data.rates.INR)+" EUR");
  getButton = document.querySelector("form button");
getButton.addEventListener("click", e =>{
    e.preventDefault();
    var dis= 1/data.rates.INR;
    const amount = document.querySelector("form input");
    const eTxt = document.querySelector(".display");
    let amountVal = amount.value;
    let d= amountVal *dis;
    eTxt.innerText = "";
    $(".display").append(d);
    if(amountVal == "" || amountVal == "0"){
        document.querySelector(".inp");
    }
  });
  console.clear();
};
