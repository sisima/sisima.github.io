$(document).ready(function(){
  nav = $("#nav-box ul li");
  // Set spotlight location to default
  item = nav.eq(0);

  // Checks whether a position is saves in localStorage from previoss pages
  if(localStorage.getItem('sItem') !== null){
    item = nav.eq(localStorage.getItem('sItem'));
  }
  
  // Create and position the spotlight
  $("#nav-box").append("<div id='highlight'></div>");
  $("#highlight").css('width', item.outerWidth()).offset({ top: item.offset().top, left: item.offset().left });
  $("#highlight").css('height', item.outerHeight())
});

// Move spotlight according to mouse position
$("#nav-box ul li").hover(function(){
  // Animate to new mouse location
  $("#highlight").stop().animate({
    "left" : $(this).offset().left,
    "top":$(this).offset().top,
    "width" : $(this).outerWidth()
  });
}, function(){
  // Return to the main position
  $("#highlight").stop().animate({
    "left" : item.offset().left,
    "width" : item.outerWidth()
  });
});

// Save new item location
$("#nav-box ul li").click(function(){
  localStorage.setItem("sItem", $(this).index());
  item = nav.eq($(this).index());
});




