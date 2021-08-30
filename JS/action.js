function Add(num) {
  document.form.text_field.value = 
  document.form.text_field.value + num;
}

function Clear() {
  document.form.text_field.value=""
}

function BackSpace() {
  let text=String(document.form.text_field.value);
  text=text.substring(0,text.length-1);
  document.form.text_field.value=text;
  
}

function Equal() {
  let text=String(document.form.text_field.value);
  if(text){
    document.form.text_field.value=eval(text);
  }
}
