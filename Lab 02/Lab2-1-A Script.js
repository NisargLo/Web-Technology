// WAP in JavaScript to print the factors of given number.

n=prompt("Enter number :");
document.write("<label>Factors : </label>")
for(i=1;i<=n;i++){
     if(n%i==0){
          if(i!=n){
               document.write("<label>"+i+", </label>");
          }
          else{
               document.write("<label>"+i+"</label>");
          }
     }
}