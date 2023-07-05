var a = +prompt("Son kiriting, biz uni toq yoki juftligini tekshirib beramiz")
while(isNaN(a) || a==0){
    a = +prompt("Xato! Iltimos, son kiriting!")
}
if(a%2==0){
    alert("Siz juft raqam kiritdingiz " + a)
} else if(a%2==1){
    alert("Siz toq raqam kiritdingiz " + a)
}