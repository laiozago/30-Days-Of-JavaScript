//console.log(countries)
//alert('Open the console and check if the countries has been loaded')

// obtém a referência para o canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function monteCarloPi(iterations) {
  let count = 0;
  // define o tamanho do canvas
  canvas.width = 500;
  canvas.height = 500;
  // desenha um quadrado
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  // desenha um círculo
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
  ctx.stroke();

  for (let i = 0; i < iterations; i++) {
    const x = Math.random();
    const y = Math.random();
    // verifica se o ponto gerado está dentro do círculo
    if (x * x + y * y <= 1) {
      count++;
      // desenha um ponto verde dentro do círculo
      ctx.fillStyle = "green";
      ctx.fillRect(x * canvas.width, y * canvas.height, 5, 5);
    } else {
      // desenha um ponto vermelho fora do círculo
      ctx.fillStyle = "red";
      ctx.fillRect(x * canvas.width, y * canvas.height, 5, 5);
    }
  }
  return 4 * count / iterations;
}
console.log(monteCarloPi(10000));
