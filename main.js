$('button').click(function(event){

  var $task = $('input[name="todo"]').val();
  var $chk = $('<input/>').attr({ type: 'checkbox' }).addClass("completeItem");
  $newListItem = $('<li>').text($task).prepend($chk).addClass('highlight');

  $('#theList').prepend($newListItem);


	 event.preventDefault();
  $newListItem.removeClass('highlight', 1000);
  });
