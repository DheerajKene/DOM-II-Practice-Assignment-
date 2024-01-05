


function BMICAL(w, h){
    let BMI = w / h * w
    return BMI;
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    let btn = document.getElementById('btn');
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let bmi = document.getElementById('BMI');
    let status = document.getElementById('status');
   
    let BMI = BMICAL(weight, height);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('error').innerHTML = "Please enter valid weight and height.";
        document.getElementById('status').innerHTML = "";
        return;
    }

    if (BMI <= 18.4) {
        bmi.innerText = BMI;
        status.innerText = " Which means you are Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        bmi.innerText = BMI;
        status.innerText = "Which means you are Normal Weight";
    } else if (BMI >= 25 && BMI <= 29.9) {
        bmi.innerText = BMI;
        status.innerText = "Which means you are Over Weight";
    } else {
        bmi.innerText = BMI;
        status.innerText = "Which means you are Obese";
    }    

})
