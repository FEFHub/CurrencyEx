$.getJSON("http://api.exchangeratesapi.io/v1/latest?access_key=760edb47c69471caf3e1acf30445d787",
function(data){
  console.log(data);

  var dis= 1/data.rates.INR;
  $(".dis").append(dis+" EUR");
  getButton = document.querySelector("form button");
getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

  function getExchangeRate(){
    const amount = document.querySelector("form input");
    const eTxt = document.querySelector(".display");
    let amountVal = amount.value;
    let d= amountVal * dis;
    eTxt.innerText = "";
    $(".display").append(d);
    if(amountVal == "" || amountVal == "0"){
        document.querySelector(".inp");
    }
    console.clear(d);
  }
  });
