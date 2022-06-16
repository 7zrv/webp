function addBorder(){
    document.getElementsByClassName("lowMenu").style.borderBottom = "3px solid #51abf3";
}


//검색창 클릭시 효과
$(document).ready(function(){
  $('.inputbox').click(function(){
    $('.searchbox').addClass('running');
    $(this).addClass('running');
  })
})
//다른곳 클릭시 돌아오게
$('html').click(function(e) {   
	if(!$(e.target).hasClass("inputbox")) {
		$('.searchbox').removeClass('running');
    $('.inputbox').removeClass('running');
	}
});    
//검색창 hover 효과
$(document).ready(function () {
  $('.searchbox').hover(
  function () {
      if(!$('.searchbox').hasClass("running")){
        $(this).addClass('hover');
        $('.inputbox').addClass('hover');
      }
      else{
        $(this).removeClass('hover');
        $('.inputbox').removeClass('hover');
      }
  },
  function () {
        $(this).removeClass('hover');
        $('.inputbox').removeClass('hover');
  }
);
});




//지금 판매중인 호캉스 기능구현
$(document).ready(function(){
   
    $('.allmenu div').click(function(){
   
      $('.allmenu div').removeClass('current');
   
      $(this).addClass('current');
    })
   
  })


  //지금 판매중인 호캉스탭 탭전환 구현
$(document).ready(function(){
   
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
   
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
   
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
   
  })
  

  //맨위로 가기 버튼 기능구현
$(document).ready(function(){
  //현재 스크롤 위치에 따아 숨기기, 나타내기
  $(window).scroll(function(){
    if($(this).scrollTop()>400){
      $('.movetop-button').fadeIn();
    }
    else{
      $('.movetop-button').fadeOut();
    }
  });

  //클릭시 위치이동
  $('movetop-img').click(function(){
    $('html, body').animate({scrollTop:0}, 300);
  })
});

//각 요소들 페이지에 들어오면 fadeIn 해주는 기능
$(document).ready(function(){
  //현재 스크롤 위치에 따라 숨기기, 나타내기
  $(window).scroll(function(){
    if($(this).scrollTop()>500){
      $('.tab-contents-top').fadeIn();
    }
    else{
      $('.tab-contents-top').fadeOut();
    }
    if($(this).scrollTop()>900){
      $('.tab-contents-low').fadeIn();
    }
    else{
      $('.tab-contents-low').fadeOut();
    }
  });

  //클릭시 위치이동
  $('movetop-img').click(function(){
    $('html, body').animate({scrollTop:0}, 300);
  })
});



 onscroll = function(){
     var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
     if(nVScroll > 1100){
         $("ul.tabs").css("position", "fixed");
     }
     else{
        $("ul.tabs").css("position", "relative");
     }
 };
  