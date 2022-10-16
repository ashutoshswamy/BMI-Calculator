function calculateBMI() {
  const weight = document.getElementById("weightinput").value;
  const height = document.getElementById("heightinput").value;
  const result = document.getElementById("result");
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    result.innerHTML = `Your BMI is ${bmi.toFixed(
      3
    )}, this means you are underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = `Your BMI is ${bmi.toFixed(
      3
    )}, this means you are healthy`;
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    result.innerHTML = `Your BMI is ${bmi.toFixed(
      3
    )}, this means you are overweight`;
  } else if (bmi >= 30.0) {
    result.innerHTML = `Your BMI is ${bmi.toFixed(
      3
    )}, this means you are obese`;
  } else {
    result.innerHTML = "Please enter the above values";
  }
}
