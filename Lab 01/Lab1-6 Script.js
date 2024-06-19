// WAP in JavaScript to check whether the given number is Armstrong or not.

n = parseInt(prompt("Enter number :"));
temp = n;
digits = 0, c = 0, r = 0;
while (n != 0) {
     // Math.floor() as floating point division...
     n = Math.floor(n / 10);
     digits++;
}
n = temp;
while (n != 0) {
     r = n % 10;
     n = Math.floor(n / 10);
     c += Math.pow(r, digits);
}
if (c == temp) {
     alert("Armstrong");
}
else {
     alert("Not Armstrong");
}