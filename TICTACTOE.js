let buttons=document.querySelectorAll(".b");
let turno=true;
let hide=document.querySelector(".hide");
let restart= document.querySelector("#RESTART");
const arr=[[0,1,2],
                 [0,3,6],
                 [0,4,8],
                 [1,4,7],
                 [2,5,8],
                 [2,4,6],
                 [3,4,5],
                 [6,7,8]]
let count=0;
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
          if(turno){

              btn.innerText="O";
              btn.style.color="red";
              turno=false;
          }
          else {
              btn.innerText="X";
              turno=true;
              btn.style.color="peru";
          }
          btn.disabled=true;
        count++;
          win();

        if(count>=9){
            hide.innerText="Match is draw"
            hide.classList.add("newclass");
            hide.classList.remove("hide");
        }


    })

}
)
const showwinner=( a)=>{
    hide.innerText=`Congrats,Winner is ,${a}`
    hide.classList.add("newclass");
    hide.classList.remove("hide");
}
let win=()=>{
    for( let pattern of arr){
      let posval1=buttons[pattern[0]].innerText;
      let posval2=buttons[pattern[1]].innerText;
      let posval3=buttons[pattern[2]].innerText;
      if(posval1!="" && posval2!="" && posval3!="" && posval1==posval2 && posval2==posval3){
        showwinner(posval1);
        for( let i of buttons){
            i.disabled=true;
        }
      }
    }
}
const reset=()=>{
    for( let j of buttons){
        j.disabled=false;
        j.innerText="";
        hide.classList.add("hide");
         hide.classList.remove("newclass");
         count=0;
    }
}
restart.addEventListener("click",reset);