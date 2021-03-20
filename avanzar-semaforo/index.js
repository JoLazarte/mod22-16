const avanzarSemaforo = (colorActual) => {
    if (colorActual == 'verde') {
      return 'amarillo';
    } else if (colorActual == 'amarillo') {
      return 'rojo';
    } else {
      return 'verde';
    }
  };
  console.log(avanzarSemaforo('verde')); // 'amarillo'
  console.log(avanzarSemaforo('amarillo')); // 'rojo'
  console.log(avanzarSemaforo('rojo')); // 'verde'