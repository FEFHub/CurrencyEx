fetch("https://currency-exchange.p.rapidapi.com/exchange?from=INR&to=EUR&q=1.0", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
      "x-rapidapi-key": "353fc2605emshf52ca478edc11a4p160f85jsn20a73a271e73"
    }
  })
  .then(response => response.json())
  .then(data => getExchangeRate(data));

function getExchangeRate(data) {
  $(".dis").append(data + " EUR");
  getButton = document.querySelector("form button");
  getButton.addEventListener("click", e => {
    e.preventDefault();
    var dis = data;
    const amount = document.querySelector("form input");
    const eTxt = document.querySelector(".display");
    let amountVal = amount.value;
    let d = amountVal * dis;
    eTxt.innerText = "";
    $(".display").append(d);
    if (amountVal == "" || amountVal == "0") {
      document.querySelector(".inp");
    }
  });
  console.log(data);
};
