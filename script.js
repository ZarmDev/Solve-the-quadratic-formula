function solveQuadraticFormula(a, b, c) {
  var t = Math.sqrt(((b*b)-4*(a*c)));
  console.log(`discriminant: ${((b*b)-4*(a*c))}`);
  console.log(`In the square root part of the formula: ${t}`);
  console.log(`${-(b)} +- ${t}`);
  console.log('---------');
  console.log(2*a);
  console.log(`To get the fraction forms, simplify ${(-(b)-t)}/${a*2} and ${(-(b)+t)}/${a*2}`);
  console.log(`Subtracting: ${(-(b)-t)/(2*a)}`);
  console.log(`Adding: ${(-(b)+t)/(2*a)}`);
}
solveQuadraticFormula(5, 13, 6)
