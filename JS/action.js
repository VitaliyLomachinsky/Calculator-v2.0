let Number_of_symbols_for_speckles = 5;

function Add(num) {
  let value = document.form.text_field.value;
  value = value + num;
  document.form.text_field.value = value;
}

function Clear() {
  document.form.text_field.value = "";
}

function BackSpace() {
  let text = String(document.form.text_field.value);
  text = text.substring(0, text.length - 1);
  document.form.text_field.value = text;
}

function Equal() {
  let text = String(document.form.text_field.value);
  if (text) {
    text = eval(text);
    text = Check_Number_of_symbols_for_speckles(text);
    document.form.text_field.value = text;
  }
}

/*Helper function*/
function Set_Number_of_symbols_for_speckles() {}

function Check_Number_of_symbols_for_speckles(input) {
  let value = String(input);

  if (value.indexOf(".") > -1) {
    value = value.slice(
      0,
      value.indexOf(".") + (+Number_of_symbols_for_speckles + 1)
    );
  }
  return value;
}

/*Slider*/
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  
};

/*Settings menu*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("drop-down-show");

  window.onclick = function (event) {
    if (!event.target.matches(".settings-btn")) {
      var dropdowns = document.getElementsByClassName("drop-down");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("drop-down-show")) {
            openDropdown.classList.remove("drop-down-show");
          }
        }
    }
  };

}
