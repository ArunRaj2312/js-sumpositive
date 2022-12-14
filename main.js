let a=parseInt(prompt("enter the length"));
let b;
let c=0;
for(i=1;i<=a;i++){
   b=parseInt(prompt("enter the value"));
   document.write(b+" ")
   if(b>0){
    c+=b;
   }
}
document.write("<br><br>")
document.write(c);