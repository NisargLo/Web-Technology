// WAP in JavaScript to ƒnd the factorial of given number.

n = prompt("Enter number :");
f=1;
for(i=n;i>=1;i--){
     f = f*i;
}
prompt(n+"! = "+f);