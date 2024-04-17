import React from "react";

const CopyTextButton = () => {
  // Seleccionar el campo de texto
  const inputElement = document.createElement("input");
  inputElement.value = "mateoirso@gmail.com";
  document.body.appendChild(inputElement);

  // Seleccionar el texto dentro del campo de texto y copiarlo al portapapeles
  inputElement.select();
  document.execCommand("copy");
};

export default CopyTextButton;
