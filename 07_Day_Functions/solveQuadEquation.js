function solveQuadEquation(a,b,c) {
    let x1 = (-b + Math.sqrt(b*b - 4*a*c)) / (2*a);
    let x2 = (-b - Math.sqrt(b*b - 4*a*c)) / (2*a);
    return [x1, x2];
}

console.log(solveQuadEquation(1, -1, 1));
