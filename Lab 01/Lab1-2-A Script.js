//  WAP in JavaScript to check whether the given no. is prime or not.

n=prompt("Enter number :");
f=1;
for(i=2;i<=n/2;i++){
     if(n%i==0){
          alert("Not Prime");
          f=0;
          break;
     }
}
if(f==1){
     alert("Prime");
}