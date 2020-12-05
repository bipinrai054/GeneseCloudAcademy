// a function called calcCircumfrence:
//Pass the radius to the function.
//Calculate the circumference based on the radius, and output "The circumference is NN"




function calCircumference() {
    let radius = document.getElementById('radius').value;
    const pi = 3.14;
    circumference = 2 * pi * radius;
    let n = circumference.toFixed(3);
    return  document.getElementById('result').innerHTML = 
    `<div>
        <p>The circumference is ${ n } </p>
    </div>`;
}