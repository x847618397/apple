window.onload=function(){
	//大轮播声明
	let imgs=document.querySelectorAll(".banner .picture .imgs img");
	let dots=document.querySelectorAll(".banner .picture .dots .point");
	let banner=document.querySelectorAll(".banner .container")[0];
	let leftBtn=document.querySelector(".banner .leftBtn");
	let rightBtn=document.querySelector(".banner .rightBtn");
	let widths=parseInt(getComputedStyle(imgs[0],null).width);

	//小轮播声明1
	let message1=document.querySelectorAll(".content ul .first .message");
	let num1=document.querySelectorAll(".content ul .first .num .dot");
	// let banner=document.querySelectorAll(".banner .container")[0];
	let lBtn1=document.querySelector(".content ul .first .left");
	let rBtn1=document.querySelector(".content ul .first .right");
	let width1=parseInt(getComputedStyle(message1[0],null).width);

	//小轮播声明2
	let message2=document.querySelectorAll(".content ul .second .message");
	let num2=document.querySelectorAll(".content ul .second .num .dot");
	// let banner=document.querySelectorAll(".banner .container")[0];
	let lBtn2=document.querySelector(".content ul .second .left");
	let rBtn2=document.querySelector(".content ul .second .right");
	let width2=parseInt(getComputedStyle(message2[0],null).width);

	//小轮播声明3
	let message3=document.querySelectorAll(".content ul .third .message");
	let num3=document.querySelectorAll(".content ul .third .num .dot");
	// let banner=document.querySelectorAll(".banner .container")[0];
	let lBtn3=document.querySelector(".content ul .third .left");
	let rBtn3=document.querySelector(".content ul .third .right");
	let width3=parseInt(getComputedStyle(message3[0],null).width);

	//小轮播声明4
	let message4=document.querySelectorAll(".content ul .fourth .message");
	let num4=document.querySelectorAll(".content ul .fourth .num .dot");
	// let banner=document.querySelectorAll(".banner .container")[0];
	let lBtn4=document.querySelector(".content ul .fourth .left");
	let rBtn4=document.querySelector(".content ul .fourth .right");
	let width4=parseInt(getComputedStyle(message4[0],null).width);

	//小米闪购声明
	let left1=document.querySelector(".flashover .container .left");
	let right1=document.querySelector(".flashover .container .right");
	let miList1=document.querySelector(".flashover ul .list-container .list");
	let wh=parseInt(getComputedStyle(miList1,null).width)/2;


	//为你推荐声明
	let left2=document.querySelector(".commend .container .left");
	let right2=document.querySelector(".commend .container .right");
	let miList2=document.querySelector(".commend ul");
	let wd=parseInt(getComputedStyle(miList2,null).width)/3;


function big(imgs,dots,banner,leftBtn,rightBtn,widths) {
	//初始化
	imgs[0].style.left=0;
	dots[0].classList.add("active");
	let now=0;
	let next=0;
	let flag=true;
	let t=setInterval(move, 2000);

	function move(){
		next++;
		if(next==imgs.length){
			next=0;
		}
		imgs[next].style.left=widths+"px";
		animate(imgs[now],{left:-widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		})
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
	}

	function moveL(){
		next--;
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-widths+"px";
		animate(imgs[now],{left:widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		});
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
	}

	leftBtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		moveL();
	}
	rightBtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move();
	}

	banner .onmouseover=function(){
		clearInterval(t);
	}
	banner .onmouseout=function(){
		t=setInterval(move, 2000);
	}

	for(let i=0;i<dots.length;i++){
        dots[i].onclick=function(){
            if(now==i){
                return;
            }else if(now<i){
                imgs[i].style.left="${widths}px";
                animate(imgs[now],{left:-widths});
                animate(imgs[i],{left:0});
                dots[now].classList.remove("active");
                dots[i].classList.add("active");
			}else if(now>i){
                imgs[i].style.left="${-widths}px";
                animate(imgs[now],{left:widths});
                animate(imgs[i],{left:0});
                dots[now].classList.remove("active");
                dots[i].classList.add("active");
            }
			next=now=i;
        }
    }


}





function small(messages,nums,lBtn,rBtn,widths) {
	messages[0].style.left=0;
	nums[0].classList.add("active");
	let now=0;
	let next=0;
	let flag=true;
	// let t=setInterval(move, 2000);

	function move(){
		next++;
		if(next==messages.length){
			next=0;
		}
		messages[next].style.left=widths+"px";
		animate(messages[now],{left:-widths});
		animate(messages[next],{left:0},function(){
			flag=true;
		})
		nums[now].classList.remove("active");
		nums[next].classList.add("active");
		now=next;
	}

	function moveL(){
		next--;
		if(next<0){
			next=messages.length-1;
		}
		messages[next].style.left=-widths+"px";
		animate(messages[now],{left:widths});
		animate(messages[next],{left:0},function(){
			flag=true;
		});
		nums[now].classList.remove("active");
		nums[next].classList.add("active");
		now=next;
	}

	lBtn.onclick=function(){
		if(!flag){
			return;
		}
		if(next==0){
            return;
        }
		flag=false;
		moveL();
	}
	rBtn.onclick=function(){
		if(!flag){
			return;
		}
		if(next==messages.length-1){
            return;
        }
		flag=false;
		move();
	}

	// banner .onmouseover=function(){
	// 	clearInterval(t);
	// }
	// banner .onmouseout=function(){
	// 	t=setInterval(move, 2000);
	// }

	for(let i=0;i<nums.length;i++){
        nums[i].onclick=function(){
            if(now==i){
                return;
            }else if(now<i){
                messages[i].style.left="${widths}px";
                animate(messages[now],{left:-widths});
                animate(messages[i],{left:0});
                nums[now].classList.remove("active");
                nums[i].classList.add("active");
			}else if(now>i){
                messages[i].style.left="${-widths}px";
                animate(messages[now],{left:widths});
                animate(messages[i],{left:0});
                nums[now].classList.remove("active");
                nums[i].classList.add("active");
            }
			next=now=i;
        }
    }

}

	
function flashover(leftbutton,rightbutton,miList,width){
	let times=0;
	rightbutton.onclick=function(){
		times++;
		if(times==2){
			times=1;
		}
		miList.style.transform=`translate(${(-width*times)}px)`;
		nums[now].classList.remove("active");
		nums[next].classList.add("active");
	}
	leftbutton.onclick=function(){
		times--;
		if(times==-1){
			times=0;
		}
		miList.style.transform=`translate(${(-width*times)}px)`;
		nums[now].classList.remove("active");
		nums[next].classList.add("active");
	}


}
	
function commend(leftbutton,rightbutton,miList,width){
	let times=0;
	rightbutton.onclick=function(){
		times++;
		if(times==3){
			times=2;
		}
		miList.style.transform=`translate(${(-width*times)}px)`;
		// nums[now].classList.remove("active");
		// nums[next].classList.add("active");
	}
	leftbutton.onclick=function(){
		times--;
		if(times==-1){
			times=0;
		}
		miList.style.transform=`translate(${(-width*times)}px)`;
		// nums[now].classList.remove("active");
		// nums[next].classList.add("active");
	}


}

//选项卡
let lis=document.querySelectorAll(".outer");
	let inn=document.querySelectorAll(".bn-choose");
	// console.log(lis);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<inn.length;j++){
				inn[j].style.display="none";
			}
		inn[i].style.display="flex";
		}
		lis[i].onmouseleave=function(){
			inn[i].style.display="none";
		}
	}

	// 导航下拉菜单
	let text=document.querySelectorAll(".top-white .title a");
	let menu=document.querySelectorAll(".navmenu");
	// console.log(menu);
	for(let x=0;x<text.length;x++){
		text[x].onmouseenter=function(){
			for(let y=0;y<menu.length;y++){
				menu[y].style.display="none";
			}
		menu[x].style.display="block";
		}
		text[x].onmouseleave=function(){
			menu[x].style.display="none";
		}
	}




	big(imgs,dots,banner,leftBtn,rightBtn,widths);//调用大轮播图
    small(message1,num1,lBtn1,rBtn1,width1);//调用小轮播
    small(message2,num2,lBtn2,rBtn2,width2);//调用小轮播
    small(message3,num3,lBtn3,rBtn3,width3);//调用小轮播
    small(message4,num4,lBtn4,rBtn4,width4);//调用小轮播
    flashover(left1,right1,miList1,wh);
    commend(left2,right2,miList2,wd);
}