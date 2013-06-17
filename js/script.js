$(document).ready(function(){
$("#story").hide();
  $("form").submit(function(event){
	event.preventDefault();
	



var name1 = $('#name1').val();
var name2 = $('#name2').val();
var verb = $('#verb').val();
var title = $('#title').val();
var place = $('#place').val();
var adverb = $('#adverb').val();


$('#namea').append(name1);
$('#nameb').append(name2);
$('#verb1').append(verb);
$('#title1').append(title);
$('#place1').append(place);
$('#adverb1').append(adverb);



	
	$("form").hide();
	$("#story").show();

	
  });
});