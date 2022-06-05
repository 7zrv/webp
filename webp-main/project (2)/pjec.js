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

//진행중 문구 fade in fade out



$(document).ready(function(){
   
    $('.allmenu div').click(function(){
   
      $('.allmenu div').removeClass('current');
   
      $(this).addClass('current');
    })
   
  })


$(document).ready(function(){
   
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
   
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
   
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
   
  })
  

 onscroll = function(){
     var nVScroll = document.documentElement.scrollTop || document.body.scrollTop;
     if(nVScroll > 1100){
         $("ul.tabs").css("position", "fixed");
     }
     else{
        $("ul.tabs").css("position", "relative");
     }
 };
  