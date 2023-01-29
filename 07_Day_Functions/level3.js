function userIdGenerator() {
    const id = Math
        .random()
        .toString(36)
        .slice(-7);
    // Escolhe uma posição aleatória na string
    const randomIndex = Math.floor(Math.random() * id.length);
    // Substitui o caractere na posição escolhida aleatoriamente por uma letra
    // maiúscula
    const newId = id.substr(0, randomIndex) + id[randomIndex].toUpperCase() + id.substr(randomIndex + 1);
    // escolhe outra posição aleatória
    const randomIndex2 = Math.floor(Math.random() * newId.length);
    // Substitui o caractere na posição escolhida aleatoriamente por uma letra
    // minuscula
    const newId2 = newId.substr(0, randomIndex2) + newId[randomIndex2].toLowerCase() +
            newId.substr(randomIndex2 + 1);
    return newId2;
}
console.log(userIdGenerator());

