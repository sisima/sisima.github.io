
function randomQuote() {
 $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(quote) {
        $('#quote').html('&ldquo;'+quote.quoteText+'&rdquo;')
        $('#author').html("-"+quote.quoteAuthor)
      }
    });
}

randomQuote();


$('#random').click(function() {
  
    randomQuote();
   
  })

    function PlaySound(sound) {
        var snd = new Audio("crack.mp3");
        snd.play();
    }



