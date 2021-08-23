
var b=document.getElementsByClassName("qte");
    // console.log(b);

    for (var i=0;i<b.length;i++){
            b[i].addEventListener("click",add)
        };
        function add(e){
            const x = document.getElementsByClassName("qte");
            var xx=e.target;
            var Q=xx.value;
            var px =xx.parentElement.parentElement.parentElement
            var pu =Number(px.querySelector(".prix").innerHTML)
        var pt=(pu*Q).toFixed(3)
        // console.log(pt)
        var sp=px.querySelector(".PrixT")
        sp.innerHTML=pt
        }
        


        const LIKE=document.querySelectorAll(".like")
        // console.log(LIKE)
        for (var i=0;i<LIKE.length;i++){
            LIKE[i].addEventListener("click",bt)
        }
        function bt(e){
        var btt=e.target;
        // console.log(btt)
        //    btt.style.color = "red";
        btt.classList.toggle("bt")
    }


const sup=document.querySelectorAll(".delete")

    for (var i=0;i<sup.length;i++){
        sup[i].addEventListener("click",del)
    }
    function del(e){
        var child=e.target.parentElement.parentElement.parentElement.parentElement;
        var pare=e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        pare.removeChild(child);
    }

const CHECK=document.querySelectorAll(".check");
var  TOTAL=document.querySelector("#total");

var sum=0;
    //  CHECK.addEventListener("change",chikii)
    //  console.log(CHECK)
        for (var i=0;i<CHECK.length;i++){
            CHECK[i].addEventListener("change",chikii)

        }
        function chikii(event){
            var ck=event.target;
            var row=ck.parentElement.parentElement;
            var QTE=row.querySelector(".qte");
            // console.log(row)
            var ss=Number(row.querySelector(".PrixT").innerHTML)
            // console.log(ss)
            if (ck.checked ) {
                sum+=ss  
                QTE.setAttribute("disabled",true);
            }
            else {sum-=ss;
                QTE.removeAttribute("disabled");}
            TOTAL.innerHTML=sum.toFixed(3)
            // console.log(sum);
            } 

