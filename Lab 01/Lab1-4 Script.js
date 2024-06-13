//  WAP in JavaScript to print the Fibonacci series of a number.

a=0;
b=1;
c=0;
n=parseInt(prompt("Enter number :"));
document.write("<label>Fibonacci series : </label>");
for(i=1;i<=n;i++){
     if(i!=n){
          document.write("<label>"+c+", </label>");
     } 
     else{
          document.write("<label>"+c+"</label>");
     }
     a=b;
     b=c;
     c=a+b;
}