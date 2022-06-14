  $(document).ready(function(){

  /* top menu_______________________________________________ */
    $(".topMenu").mouseenter(function(){ //주메뉴영역에 오버시
      $(this).find("li>.menu").stop().slideDown();
      $(".bg_box").stop().slideDown();
  
    });
  
    $("header").mouseleave(function(){ //헤더영역을 나갔을때
      $(this).find("li>.menu").stop().slideUp();
      $(".bg_box").stop().slideUp();
  
    });
  

    /* visual_______________________________________________ */
  let simg=$(".slide ul");
	let simgli=$(".slide ul li");
	let sbtn=$(".slide_btn ul li");
	let snext=$(".side_btn .nex");
	let spre=$(".side_btn .pre");
  let simg_w=simgli.width();   //이미지의 가로너비
	let simg_n=simgli.length;  //이미지의 총개수  
	let soldidx=0;  //기존이미지
	let sindex=0;  //선택된 새이미지


  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex){

    targetX=-(sindex*simg_w); //움직이는 거리(너비)

    simg.animate({left:targetX},600);  //위에서 계산한 거리만큼 움직임
		sbtn.eq(soldidx).removeClass("active");  //기존버튼 비활성화
		sbtn.eq(sindex).addClass("active");  //선택버튼 활성화
		soldidx=sindex;

  };

  //슬라이드 자동함수 생성
  function slideAuto(){

    sindex++;	
		if(sindex==simg_n){ //simg_n은 이미지개수 4, index는 0,1,2,3
			sindex=0;
		}
		slideImg(sindex);

  };

  auto=setInterval(slideAuto,4000);


  //하단버튼 클릭
  sbtn.click(function(){

    clearInterval(auto);  //버튼클릭시 자동함수 해지
    $(".play").hide();
		$(".stop").show();

    sindex=$(this).index();
		slideImg(sindex);
    auto=setInterval(slideAuto,4000); //버튼 클릭안할땐 다시 자동함수 실행

  });

  //좌우버튼 클릭
  snext.click(function(){

    clearInterval(auto);
    $(".play").hide();
		$(".stop").show();

    sindex++;	
		if(sindex>simg_n-1){ //마지막 이미지까지 오면 다시 첫번재 이미지부터 다시....
      sindex=0;      
    }
		slideImg(sindex);
    auto=setInterval(slideAuto,4000);

  });

  spre.click(function(){

    clearInterval(auto);
    $(".play").hide();
		$(".stop").show();
    
    sindex--;
		if(sindex<0){  //첫번째 이미지까지 오면 다시 맨 마지막 이미지부터 다시....
			sindex=simg_n-1; //총개수 4(이미지4컷)에서 1을 뺀 3->index=3(0,1,2,3) 
		} 	
		slideImg(sindex);
    auto=setInterval(slideAuto,4000);

  });

  //Play,Stop 클릭
  $(".play").hide();  //처음에는 Stop버튼은 보이게 하기위해 Play버튼은 숨김

  $(".stop").click(function(){
    clearInterval(auto);
    $(".stop").hide();
		$(".play").show();
  });
  $(".play").click(function(){
    auto=setInterval(slideAuto,4000);
    $(".play").hide();
		$(".stop").show();
  });

  
  /* _________스크롤_________________________________________ */

  //스크롤바가 이동될때마다 스크롤위치값 나타내기
$(window).scroll(function(){
  $("#txt1").text($(this).scrollTop());
});


  //탑버튼____________________________________

$("#top_btn").hide(); //탑버튼 숨기기

//스크롤이 350이상일때 TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
$(window).scroll(function(){

  if($(this).scrollTop()>800){
    $("#top_btn").fadeIn();
  }else{
    $("#top_btn").fadeOut();
  }
});


//스크롤 이상일때 store2 나타나기
$(window).scroll(function(){

  if($(this).scrollTop()>=2200){
    $("#open .new .store2").css({"left":"160px","transition":"all 0.7s"});
  }
  });

  //스크롤 이상일때 ball 나타나기
$(window).scroll(function(){

  if($(this).scrollTop()>=2200){
    $("#open .new .ball").css({"left":"160px","transition":"all 0.7s"});
  }
  });
  
//스크롤 이상일때 ban 나타나기
$(window).scroll(function(){

  if($(this).scrollTop()>=2500){
    $("#open .new .ban").css({"left":"100px","transition":"all 0.7s"});
  }
  });

//스크롤 이상일때 store1 나타나기
$(window).scroll(function(){

  if($(this).scrollTop()>=600){
    $("#story .store1").css({"top":"410px","transition":"all 0.7s"});
  }
  });


//스크롤 이상일때 kid 나타나기
$(window).scroll(function(){

  if($(this).scrollTop()>=350){
    $("#story .kid").css({"bottom":"-620px","transition":"all 0.7s"});
  }
  });


//스크롤

//오른쪽 퀵메뉴_____________________________________
$("#scroll_btn").hide(); //퀵메뉴 숨기기

//스크롤이 350이상일때 TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
$(window).scroll(function(){

  if($(this).scrollTop()>50){
    $("#scroll_btn").fadeIn();
  }else{
    $("#scroll_btn").fadeOut();
  }
});


//스크롤 위치에 따라 오른쪽 퀵메뉴 오버되게 함
$(window).scroll(function(){

//scroll 0~700
if($(this).scrollTop()>=0 && $(this).scrollTop()<700){
  $("#scroll_btn ul .scb1").css({"width":"70px","border-radius":"25px","transition":"all 0.3s"});
  $("#scroll_btn ul .scb1 a .scroll_hover").css({"display":"inline-block"});
}else{
  $("#scroll_btn ul .scb1").css({"width":"20px","border-radius":"50px"});
  $("#scroll_btn ul .scb1 a .scroll_hover").css({"display":"none"});
}


//scroll 700~1800
if($(this).scrollTop()>=700 && $(this).scrollTop()<1800){
  $("#scroll_btn ul .scb2").css({"width":"70px","border-radius":"25px","transition":"all 0.3s"});
  $("#scroll_btn ul .scb2 a .scroll_hover").css({"display":"inline-block"});
}else{
  $("#scroll_btn ul .scb2").css({"width":"20px","border-radius":"50px"});
  $("#scroll_btn ul .scb2 a .scroll_hover").css({"display":"none"});
}


//scroll 1700~2600
if($(this).scrollTop()>=1800 && $(this).scrollTop()<2700){
  $("#scroll_btn ul .scb3").css({"width":"70px","border-radius":"25px","transition":"all 0.3s"});
  $("#scroll_btn ul .scb3 a .scroll_hover").css({"display":"inline-block"});
}else{
  $("#scroll_btn ul .scb3").css({"width":"20px","border-radius":"50px"});
  $("#scroll_btn ul .scb3 a .scroll_hover").css({"display":"none"});
}

//scroll 2600~3600
if($(this).scrollTop()>=2700 && $(this).scrollTop()<3700){
  $("#scroll_btn ul .scb4").css({"width":"70px","border-radius":"25px","transition":"all 0.3s"});
  $("#scroll_btn ul .scb4 a .scroll_hover").css({"display":"inline-block"});
}else{
  $("#scroll_btn ul .scb4").css({"width":"20px","border-radius":"50px"});
  $("#scroll_btn ul .scb4 a .scroll_hover").css({"display":"none"});
}

//scroll 3600~3933
if($(this).scrollTop()>=3700 && $(this).scrollTop()<=4033){
  $("#scroll_btn ul .scb5").css({"width":"70px","border-radius":"25px","transition":"all 0.3s"});
  $("#scroll_btn ul .scb5 a .scroll_hover").css({"display":"inline-block"});
}else{
  $("#scroll_btn ul .scb5").css({"width":"20px","border-radius":"50px"});
  $("#scroll_btn ul .scb5 a .scroll_hover").css({"display":"none"});
}

});



//오른쪽 퀵메뉴가 보일때 클릭시 각 콘텐츠의 위치로 이동하게 함
$("#scroll_btn ul .scb1").click(function(){
  $("body,html").animate({scrollTop:"0px"},700);
});

$("#scroll_btn ul .scb2").click(function(){
  $("body,html").animate({scrollTop:"700px"},700);
});

$("#scroll_btn ul .scb3").click(function(){
  $("body,html").animate({scrollTop:"1800px"},700);
});

$("#scroll_btn ul .scb4").click(function(){
  $("body,html").animate({scrollTop:"2700px"},700);
});

$("#scroll_btn ul .scb5").click(function(){
  $("body,html").animate({scrollTop:"3700px"},700);
});





});




