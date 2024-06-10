a = prompt("Enter number 1 :");
b = prompt("Enter number 2 :");
c = prompt("Enter any operation from '+', '-', '*', '/', '%' :");
if (c == "+") {
     alert("Sum = " + (parseInt(a) + parseInt(b)));
}
else if (c == "-") {
     alert("Substract = " + (parseInt(a) - parseInt(b)));
}
else if (c == "*") {
     alert("Multiply = " + (parseInt(a) * parseInt(b)));
}
else if (c == "/") {
     alert("Divide = " + (parseInt(a) / parseInt(b)));
}
else if (c == "%") {
     alert("Modulus = " + (parseInt(a) % parseInt(b)));
}