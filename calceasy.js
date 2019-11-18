var disp = document.getElementById("disp");
function buttonPush(n) {
    disp.innerHTML += n;
}
function answer(){
    c=eval(disp.innerHTML);
    disp.innerHTML=c;
}
function calc(){
    disp.innerHTML='';
}

document.getElementById("1").addEventListener("click",function(){ buttonPush(1); });
document.getElementById("2").addEventListener("click",function(){ buttonPush(2); });
document.getElementById("3").addEventListener("click",function(){ buttonPush(3); });
document.getElementById("4").addEventListener("click",function(){ buttonPush(4); });
document.getElementById("5").addEventListener("click",function(){ buttonPush(5); });
document.getElementById("6").addEventListener("click",function(){ buttonPush(6); });
document.getElementById("7").addEventListener("click",function(){ buttonPush(7); });
document.getElementById("8").addEventListener("click",function(){ buttonPush(8); });
document.getElementById("9").addEventListener("click",function(){ buttonPush(9); });
document.getElementById("0").addEventListener("click",function(){ buttonPush(0); });
document.getElementById("dec").addEventListener("click",function(){ buttonPush('.'); });

document.getElementById("add").addEventListener("click",function(){ buttonPush('+'); });
document.getElementById("subtr").addEventListener("click",function(){ buttonPush('-'); });
document.getElementById("mult").addEventListener("click",function(){ buttonPush('*'); });
document.getElementById("division").addEventListener("click",function(){ buttonPush('/'); });

document.getElementById("clear").addEventListener("click",function(){calc(); });
document.getElementById("ans").addEventListener("click",function(){ answer(); });