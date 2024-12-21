const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    let message = '';

    if (bmi < 18.5) {
      message = 'YOU ARE UNDERWEIGHT';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message = 'YOU HAVE A NORMAL WEIGHT';
    } else if (bmi >= 25 && bmi < 29.9) {
      message = 'YOU ARE OVERWEIGHT';
    } else {
      message = 'YOU ARE OBESE';
    }

    // Show the result with the appropriate message
    results.innerHTML = `<span>${bmi}</span>, <span>${message}</span>`;
    
  }
});

