function passwordGenerator(n) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let password = '';
    for (let i = 0; i < n; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

console.log(passwordGenerator(20));
