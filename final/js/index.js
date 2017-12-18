$(document).ready(function(){
  nav = $("#nav-box ul li");

  item = nav.eq(0);


  if(localStorage.getItem('sItem') !== null){
    item = nav.eq(localStorage.getItem('sItem'));
  }
  

  $("#nav-box").append("<div id='highlight'></div>");
  $("#highlight").css('width', item.outerWidth()).offset({ top: item.offset().top, left: item.offset().left });
  $("#highlight").css('height', item.outerHeight())
});


$("#nav-box ul li").hover(function(){
  
  $("#highlight").stop().animate({
    "left" : $(this).offset().left,
    "top":$(this).offset().top,
    "width" : $(this).outerWidth()
  });
}, function(){
  
  $("#highlight").stop().animate({
    "left" : item.offset().left,
    "width" : item.outerWidth()
  });
});


$("#nav-box ul li").click(function(){
  localStorage.setItem("sItem", $(this).index());
  item = nav.eq($(this).index());
});




