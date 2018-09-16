window.onload=function () {
    let shopping=document.querySelectorAll(".shop");
    let bag=document.querySelector(".bag");
    console.log(shopping,bag);
    for (let i=0;i<shopping.length;i++) {
        shopping[i].onclick=function () {
            let status=getComputedStyle(bag,null).display;
            if (status=="none") {
                bag.style.display="block";
            }else if(status=="block"){
                bag.style.display="none"
            }
        }
    }

    window.onscroll=function () {
        let navs=document.querySelectorAll("nav");
        let scrollHeight=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(navs,scrollHeight);
        if (scrollHeight<100) {
            bag.style.top="88px";
        }else {
            bag.style.top="49px";
        }
        for (let i=0;i<navs.length;i++) {
            if(scrollHeight<100){
                navs[i].style.position="static";
                navs[i].style.top="";
                navs[i].style.left="";
            }else {
                navs[i].style.position="fixed";
                navs[i].style.top="0";
                navs[i].style.left="0";
            }
        }
    }
    let meau=document.querySelector(".meau");
    let meaubox=document.querySelector(".meaubox");
    let cuohao=document.querySelector(".cuohao");
    
    let body=document.querySelector("body");
 
    meau.onclick=function () {
        meaubox.style.height="100%";
        body.style.overflow="hidden";
    }
    cuohao.onclick=function () {
        meaubox.style.height="0";
    }
   




    // let addsli=document.querySelectorAll(".footer1 .big .big_li");
    // let adds=document.querySelectorAll(".footer1 .big h2");
    // let smalls=document.querySelectorAll(".footer1 .big .small");
    // // let smallsStatus=getComputedStyle(smalls,null).display;

    // console.log(addsli,adds, smalls);
  
    // let Times=0;
    // for (let i=0;i<addsli.length;i++) {
    //     addsli[i].onclick=function () {
    //         Times++;
    //         if (Times%2!==0) {
    //             adds[i].style.transform="rotate(45deg)";
    //             // animate((smalls[i]),{display:"block"});
                
    //         }else if(Times%2==0){
    //             adds[i].style.transform="rotate(90deg)";
    //             // smalls[i].style.display="none";
    //              animate((smalls[i]),{display:"none"}); 
    //         }
    //     }
    // }
    





      $(".min_nav .navlist").each(function(index,d){
        $(".min_nav .navlist").eq(index).click(function(event) {
            $(".xiala").eq(index).toggle("normal");
        });
    })
}