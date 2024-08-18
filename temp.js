document
  .getElementById("temp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var numberInput = document.getElementById("input");
    var number = numberInput.value;

    var selectElement = document.getElementById("optionz");
    var selectedValue = selectElement.value;
    var celcius = 0;

    numberList.innerHTML = "";
    if (selectedValue == "Celcius") {
      // fara
      celcius = number;
      var temp1 = Math.round(number * (9 / 5) + 32);
      // kelvin
      var temp2 = Math.round(number * 1 + 273.15);
      temp2 = "Kelvin      : " + temp2;
      temp1 = "Fahrenheit  : " + temp1;
    } else if (selectedValue == "Kelvin") {
      // cel
      var temp2 = Math.round(number * 1 - 273.15);
      celcius = temp2;
      // far
      var temp1 = Math.round(temp2 * (9 / 5) + 32);
      temp1 = "Fahrenheit  : " + temp1;
      temp2 = "Celcius     : " + temp2;
    } else {
      // cel
      var temp1 = Math.round((5 / 9) * (number * 1 - 32));
      celcius = temp1;
      // kel
      var temp2 = Math.round(temp1 * 1 + 273.15);
      temp1 = "Celcius    : " + temp1;
      temp2 = "Kelvin     : " + temp2;
    }
    var firstTd = document.querySelector("table tr td:nth-child(1)");
    var secondTd = document.querySelector("table tr td:nth-child(2)");
    var thirdTd = document.querySelector("table tr td:nth-child(3)");

    firstTd.classList.remove("cold");
    secondTd.classList.remove("moderate");
    thirdTd.classList.remove("hot");

    if (celcius < 10) {
      firstTd.classList.add("cold");
    } else if (celcius > 29) {
      thirdTd.classList.add("hot");
    } else {
      secondTd.classList.add("moderate");
    }

    var li = document.createElement("li");
    li.textContent = temp1;
    document.getElementById("numberList").appendChild(li);

    var li2 = document.createElement("li");
    li2.textContent = temp2;
    document.getElementById("numberList").appendChild(li2);
  });
