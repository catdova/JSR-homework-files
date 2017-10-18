/* Independent Practice

Making a list: jQuery


You'll add the ability to complete the you gotta be's in your lyrics list:

- Using jQuery, add a "complete" link at the end of each to-do item (i.e. each "gotta-be")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete" link at the end

*/
$('.gotta-be').append("<a href='' class='complete'> complete</a>");

$('.complete').click(function(event){
	event.preventDefault();
	$(event.target).parent().css('text-decoration', 'line-through');
});

$('#new-thing-button').click(function(event){	
	event.preventDefault();

	var $newThing = $('#new-thing');
	var value = $newThing.val();
	var $list = $('#gotta-be-list');
	addToList($list, value);
	/*grab #new-thing
	grab value of #new-thing
	append target into #gotta-be-list
	clear user input from #new-thing
	*/
});

function addToList($list, thing) {
	event.preventDefault();

  var $thingLi = $('<li>').text(thing);
  $list.append($thingLi);
}
