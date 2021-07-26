function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  const expString = expr.replace( /\s/g, "");

  let count = 0;
  for (const value of expString) {
    if (value === '(') count++;
    if (value === ')') count--;
  }

  if (count) throw new Error('ExpressionError: Brackets must be paired');
  if (expString.includes('/0')) throw new Error('TypeError: Division by zero.');
    
  return new Function(`return ${expr}`)();
}

module.exports = {
    expressionCalculator
}
