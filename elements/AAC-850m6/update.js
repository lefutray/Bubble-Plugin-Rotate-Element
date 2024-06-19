function(instance, properties, context) {
  // Obtener el ID ingresado por el usuario
  const idElemento = properties.idElemento;

  // Obtener el ángulo de rotación ingresado por el usuario
  const anguloRotacion = properties.anguloRotacion;

  // Seleccionar el elemento con el ID correspondiente
  const elemento = document.getElementById(idElemento);

  // Si el elemento existe, aplicar la rotación
  if (elemento) {
    elemento.style.transform = `rotate(${anguloRotacion}deg)`;
  }

  // Inyectar el código CSS en el encabezado
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    #${idElemento} {
      transform: rotate(${anguloRotacion}deg);
    }
  `;
  document.head.appendChild(styleElement);
}