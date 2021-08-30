let Number_of_symbols_for_speckles=5;

function Add(num) {
  let value=document.form.text_field.value;
  value = value + num;
  document.form.text_field.value=value;
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
    text=eval(text);
    text=Check_Number_of_symbols_for_speckles(text);
    document.form.text_field.value=text;
  }
}

/*Helper function*/
function Set_Number_of_symbols_for_speckles(){
  
}

function Check_Number_of_symbols_for_speckles(input){
  let value=String(input);

  if(value.indexOf('.')>-1){
    value=value.slice(0,value.indexOf('.')+(+Number_of_symbols_for_speckles+1));
  }
  return value;
}

