numero = notnull;

function less() {
  numero--;
  setValue(numero);
}

function more() {
  numero = numero+50;
  setValue(numero);
}

function setValue(value) {
  document.getElementById('num').value = value;
}

setValue(numero);