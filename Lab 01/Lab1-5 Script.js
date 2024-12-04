// WAP in JavaScript to check whether the given number is palindrome or not.

n = prompt("Enter number :");
l = 0;
h = n.length - 1;
f = 1;
while (l <= h) {
     if (n.charAt(l) != n.charAt(h)) {
          f = 0;
          alert("Not Palindrome");
          break;
     }
     l++;
     h--;
}
if (f == 1) {
     alert("Palindrome");
}