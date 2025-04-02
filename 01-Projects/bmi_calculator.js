const height=Number(prompt("Enter your Height "))
const weight=Number(prompt("Enter your Weight "))

const bmi= weight/(height*height)
let category;
    if (bmi < 18.5) {
        category = "Underweight";
        console.log(category);
        
    } else if (bmi < 25) {
        category = "Normal weight";
        console.log(category);
    } else if (bmi < 30) {
        category = "Overweight";
        console.log(category);
    } else {
        category = "Obese";
        console.log(category);
    }
    
    alert(`Your BMI is ${bmi.toFixed(1)} (${category})`);

