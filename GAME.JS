let i=0;
let a=(document.getElementById("Box-1"));
let b=(document.getElementById("Box-2"));
let c=(document.getElementById("Box-3"));
let d=(document.getElementById("Box-4"));
let e=(document.getElementById("Box-5"));
let f=(document.getElementById("Box-6"));
let g=(document.getElementById("Box-7"));
let h=(document.getElementById("Box-8"));
let j=(document.getElementById("Box-9"));
let button=(document.getElementById("Btn"));
let srt=(document.getElementById("ST"))
let WINNER=(document.getElementById("wins"))

let x=(document.getElementById("xscore"))
let o=(document.getElementById("oscore"))
let xvalue=0;
let ovalue=0;
let gameOver = false;

     function box1(){
        if (gameOver) return;
        if (a.innerHTML=="") {
     if (i%2==0){
          a.innerHTML="X";
        a.style.color="tomato";
        srt.innerHTML=("O-TURN")
        srt.style.color="white";
    }
    else{
        a.innerHTML="O";
        a.style.color="white";
        srt.innerHTML=("X-TURN")
        srt.style.color="tomato";

    }
i++;
xowin();

}
    
     }
      function box2(){
        if (gameOver) return;
        if (b.innerHTML=="") {
     if (i%2==0){
          b.innerHTML="X";
        b.style.color="tomato";
        srt.innerHTML=("O-TURN")
        srt.style.color="white";


    }
    else{
        b.innerHTML="O"
        b.style.color="white";
        srt.innerHTML=("X-TURN")
        srt.style.color="tomato";

    }
i++;
xowin();

}
    
     }
 function box3(){
    if (gameOver) return;
        if (c.innerHTML=="") {
     if (i%2==0){
          c.innerHTML="X";
        c.style.color="tomato";
        srt.innerHTML=("O-TURN")
        srt.style.color="white";

    }
    else{
        c.innerHTML="O";
    
        c.style.color="white";
        srt.innerHTML=("X-TURN")
        srt.style.color="tomato";

    }
i++;
xowin();
}
    
     }
 function box4(){
    if (gameOver) return;
        if (d.innerHTML=="") {
     if (i%2==0){
          d.innerHTML="X";
        d.style.color="tomato";
        srt.innerHTML=("O-TURN")
        srt.style.color="white";

    }
    else{
        d.innerHTML="O";
        d.style.color="white";
        srt.innerHTML=("X-TURN")
        srt.style.color="tomato";

    }
i++;
xowin();


}
    
     }
 function box5(){
    if (gameOver) return;
        if (e.innerHTML=="") {
     if (i%2==0){
          e.innerHTML="X";
        e.style.color="tomato";
        srt.innerHTML=("O-TURN")
        srt.style.color="white";

    }
    else{
        e.innerHTML="O";
    
        e.style.color="white";
        srt.innerHTML=("X-TURN")
        srt.style.color="tomato";

    }
i++;
xowin();

}
    
     }
 function box6(){
    if (gameOver) return;
        if (f.innerHTML=="") {
     if (i%2==0){
          f.innerHTML="X";
        f.style.color="tomato";
        srt.innerHTML=("O-TURN");
        srt.style.color="white";

    }
    else{
        f.innerHTML="O";

        f.style.color="white";
        srt.innerHTML=("X-TURN");
        srt.style.color="tomato";

    }
i++;
xowin();

}
    
     }
 function box7(){
    if (gameOver) return;
        if (g.innerHTML=="") {
     if (i%2==0){
          g.innerHTML="X";
        g.style.color="tomato";
        srt.innerHTML=("O-TURN");
        srt.style.color="white";

    }
    else{
        g.innerHTML="O";
        g.style.color="white";
        srt.innerHTML=("X-TURN")
        srt.style.color="tomato";

    }
i++;
xowin();

}
    
     }
 function box8(){
    if (gameOver) return;
        if (h.innerHTML=="") {
     if (i%2==0){
          h.innerHTML="X";
        h.style.color="tomato";
        srt.innerHTML=("O-TURN");
        srt.style.color="white";

    }
    else{
        h.innerHTML="O";
        
        h.style.color="white";
        srt.innerHTML=("X-TURN")
        srt.style.color="tomato";

    }
    i++;
xowin();

}
     }
 function box9(){
    if (gameOver) return;
        if (j.innerHTML=="") {
     if (i%2==0){
          j.innerHTML="X";
        j.style.color="tomato";
        srt.innerHTML=("O-TURN")
        srt.style.color="white";

    }
    else{
        j.innerHTML="O";
        
        j.style.color="white";
        srt.innerHTML=("X-TURN")
        srt.style.color="tomato";

    }
    i++;
xowin();
}
     }

function xowin()  {

if ((a.innerHTML==="X" && b.innerHTML==="X" && c.innerHTML==="X")||
    (d.innerHTML==="X" && e.innerHTML==="X" && f.innerHTML==="X")||
    (g.innerHTML==="X" && h.innerHTML==="X" && j.innerHTML==="X")||
    (a.innerHTML==="X" && d.innerHTML==="X" && g.innerHTML==="X")||
    (b.innerHTML==="X" && e.innerHTML==="X" && h.innerHTML==="X")||
    (c.innerHTML==="X" && f.innerHTML==="X" && j.innerHTML==="X")||
    (a.innerHTML==="X" && e.innerHTML==="X" && j.innerHTML==="X")||
    (c.innerHTML==="X" && e.innerHTML==="X" && g.innerHTML==="X"))  { 

    WINNER.innerHTML=" X";
    WINNER.style.color="tomato";
    xvalue++;
    x.innerHTML=xvalue;
    x.style.color="tomato";
    gameOver = true;
    }
    else if ((a.innerHTML==="O" && b.innerHTML==="O" && c.innerHTML==="O")||
    (d.innerHTML==="O" && e.innerHTML==="O" && f.innerHTML==="O")||
    (g.innerHTML==="O" && h.innerHTML==="O" && j.innerHTML==="O")||
    (a.innerHTML==="O" && d.innerHTML==="O" && g.innerHTML==="O")||
    (b.innerHTML==="O" && e.innerHTML==="O" && h.innerHTML==="O")||
    (c.innerHTML==="O" && f.innerHTML==="O" && j.innerHTML==="O")||
    (a.innerHTML==="O" && e.innerHTML==="O" && j.innerHTML==="O")||
    (c.innerHTML==="O" && e.innerHTML==="O" && g.innerHTML==="O"))  {

    WINNER.innerHTML=" O";
    WINNER.style.color="white";
        ovalue++;
    o.innerHTML=ovalue;
    o.style.color="white";
    gameOver = true;

    }
    else if (i==9){
        WINNER.innerHTML="DRAW";
        gameOver = true;
    }

}





        
function Btn() {

a.innerHTML="";
b.innerHTML="";
c.innerHTML="";
d.innerHTML="";
e.innerHTML="";
f.innerHTML="";
g.innerHTML="";
h.innerHTML="";
j.innerHTML="";
i=0;
WINNER.innerHTML="";
WINNER.style.color="white";
srt.innerHTML="Start with X";
srt.style.color=" rgb(253, 251, 109)";
gameOver = false;
}
function btn2(){
    xvalue=0;
    ovalue=0;
    x.innerHTML=xvalue;
    x.style.color="rgb(253, 251, 109)";
    o.innerHTML=ovalue;
    o.style.color="rgb(253, 251, 109)";
}
