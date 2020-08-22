/* Body Mass Index If your BMI is: below 18.5 – you're in the underweight range. between 18.5 
and 24.9 – you're in the healthy weight range. between 25 and 29.9 – you're
 in the overweight range.*/

//BMI calculator
let john = {
    fullName: 'John Smith',
    mass: 72,
    height: 1.95,
    calcBMI: function(){
        this.BMI =this.mass / (this.height * this.height);
        return this.BMI;
    }
}

let x = john.calcBMI();
console.log(x);