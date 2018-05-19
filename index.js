var form = $('form');
form.hide();


var currentTable;
$('.available').on('click', function() {
  currentTable = $(this);
  $('#newRes').text(currentTable.attr('id').substring(5))
  $('form').fadeIn(500);
  form.show();
});


$('#save').on('click', function() {
  currentTable.addClass('reserved');
  var userName = $('.name').val();
  var guestCount = $('.table-number').val();
  currentTable.append(`<div class = "tool-tip"> Name: ${userName}<br> Guests: ${guestCount}</div>`)
  currentTable.css("background-color", '#ADAAAA')

  form.fadeOut();
  $("#myForm")[0].reset();
});





var numberDisplay;
$('#number').on('click', function() {
  currentTable = $(this);
});





$('.material-icons').on('click', function() {
  form.fadeOut();
});
