let a=parseInt(prompt("enter the length"));
let b;
let c=0;
let i=1;
while(i<=a){
   b=parseInt(prompt("enter the value"));
   document.write(b+" ")
   if(b>0){
    c+=b;
   }
   i++
}
document.write("<br><br>")
document.write(c);