
var images = ['ballo.jpg', 'bcare.jpg', 'candy.jpg','humans.jpg','box.jpg'];
$('<img class="fade-in" src="image/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#random');

