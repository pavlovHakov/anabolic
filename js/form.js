document.querySelector(".btn-submit").addEventListener("click", (e) => {
  e.preventDefault();
  let btn = document.querySelector(".btn-submit");
  let inputName = document.querySelector(".inputName");
  let inputTel = document.querySelector(".inputTel");

  if (ValidName() === true && ValidPhone() === true) {
    inputName.value = "";
    inputTel.value = "";
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    btn.style.border = "1px solid green";
    btn.innerText = "We will call you back";
    btn.disabled = true;
    setTimeout(() => {
      btn.style.backgroundColor = "#ff3156";
      btn.style.color = "#fff";
      btn.style.border = "border 2px solid #ff3156;";
      btn.innerText = "Order";
      btn.style.cursor = "pointer";
      btn.removeAttribute("disabled");
    }, 3000);
  }
});

// Валидация имени

function ValidName() {
  let error = document.getElementById("errorName");
  let myName = document.getElementById("name");
  let borderInput = document.querySelector(".inputName");
  let valid = myName.value.length !== 0 && myName.value.trim().length > 0;

  Comparison(valid, error, borderInput, "your name");
  return valid;
}

// Валидация номера телефона

function ValidPhone() {
  let error = document.getElementById("errorTel");
  let myPhone = document.getElementById("phone");
  let borderInput = document.querySelector(".inputTel");
  let valid =
    !isNaN(myPhone.value) &&
    myPhone.value.length !== 0 &&
    myPhone.value.trim().length > 0;

  Comparison(valid, error, borderInput, "only numbers");
  return valid;
}
// Сравнение по условию
function Comparison(valid, elem, border, text) {
  if (valid) {
    elem.innerText = "";
    border.style.border = "1px solid #a6a4a4";
  } else {
    elem.innerText = text;
    border.style.border = "1px solid red";
  }
}
