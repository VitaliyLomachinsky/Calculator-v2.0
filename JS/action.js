

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
    document.form.text_field.value = text;
  }
}



