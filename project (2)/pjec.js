function addBorder(){
    document.getElementsByClassName("lowMenu").style.borderBottom = "3px solid #51abf3";
}

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
  