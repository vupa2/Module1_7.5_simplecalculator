const myMath = (id) => {
  const left = parseFloat(document.querySelector('#left').value);
  const right = parseFloat(document.querySelector('#right').value);

  switch (id) {
    case 'plus':
      return left + right;
      break;
    case 'subtract':
      return left - right;
      break;
    case 'mutiply':
      return left * right;
      break;
    case 'devide':
      return left / right;
      break;
    case 'power':
      return Math.pow(left, right);
      break;
    default :
      return 0;
  }
}

document.querySelectorAll('div > button').forEach(button => button.addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('#result').innerHTML = `Results: ${myMath(e.target.id)}`;
}))
