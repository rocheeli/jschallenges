$(function(){

	var control = 0;

	$('h1').click(function() {
	if(control ==0){
    $('h1').css('color' ,'red');
    control++;
}else{
	$('h1').css('color' ,'black');
	control--;
}

});
	$('.title:even').hide();
	$('footer li:even').hide();

	$('aside').remove();


$('p').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('Bacon', 'Laser Vision')); 
});

$('.post:last').remove();
$('.post:last').remove();
$('.post:last').remove();


})