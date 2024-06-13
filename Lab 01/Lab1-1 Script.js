// WAP in JavaScript to make simple calculator using popup box.

a=parseInt(prompt("Enter number 1 :"));
b=parseInt(prompt("Enter number 2 :"));
c=prompt("Enter any operation from '+', '-', '*', '/', '%' :");
if (c=="+") {
     alert("Sum = " + (a+b));
}
else if (c=="-") {
     alert("Substract = " + (a-b));
}
else if (c=="*") {
     alert("Multiply = " + (a*b));
}
else if (c=="/") {
     alert("Divide = " + (a/b));
}
else if (c=="%") {
     alert("Modulus = " + (a%b));
}