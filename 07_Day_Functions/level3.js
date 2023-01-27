/*function userIdGenerator() {
    const id = Math
        .random()
        .toString(36)
        .slice(-7);
    // Escolhe uma posição aleatória na string
    const randomIndex = Math.floor(Math.random() * id.length);
    // Substitui o caractere na posição escolhida aleatoriamente por uma letra
    // maiúscula
    const newId = id.substr(0, randomIndex) + id[randomIndex].toUpperCase() + id.substr(
        randomIndex + 1
    );
    // escolhe outra posição aleatória
    const randomIndex2 = Math.floor(Math.random() * newId.length);
    // Substitui o caractere na posição escolhida aleatoriamente por uma letra
    // minuscula
    const newId2 = newId.substr(0, randomIndex2) + newId[randomIndex2].toLowerCase() +
            newId.substr(randomIndex2 + 1);
    return newId2;
}
console.log(userIdGenerator());
*/

function monteCarloPi(iterations) {
    // contador para armazenar a quantidade de pontos gerados dentro do círculo
    let count = 0;
    // loop para gerar pontos aleatórios
    for (let i = 0; i < iterations; i++) {
      // gera valores aleatórios x e y entre 0 e 1
      const x = Math.random();
      const y = Math.random();
      // verifica se o ponto gerado está dentro do círculo
      if (x * x + y * y <= 1) {
        count++;
      }
    }
    // calcula a estimativa de pi com base no número de pontos dentro do círculo
    return 4 * count / iterations;
  }
  // chama a função com o número de iterações desejado
  console.log(monteCarloPi(10000));
  