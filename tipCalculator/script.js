//Make simple Tip Calculator to calculate tips. User should be able to add total amount and tip percentage he/shw want to give.


function tipCalculator(){
    let total = document.getElementById('totalAmount[]').value;
    const tipPercentage = 5;  // 5% is tip percentage
    let tip = tipPercentage/100*total;
    document.getElementById('result').innerHTML = 
    `<div>
        <p>You have to tip Rs.${tip}</p>
    </div>`
}