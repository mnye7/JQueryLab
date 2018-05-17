
var form = $('form');
form.hide();
$('.available').on('click', function () {
    form.show();
});
var currentTable;
$('.available').on('click', function () {
    currentTable = $(this);
    form.show();
});

$('#save').on('click', function () {
    currentTable.addClass('reserved');
    form.hide();


});

$('#table1').on('click', function () {
    $('#table1')
        .css("background-color", '#ADAAAA')
});

$('#table2').on('click', function () {
    $('#table2')
        .css("background-color", '#ADAAAA')
});

$('#table3').on('click', function () {
    $('#table3')
        .css("background-color", '#ADAAAA')
});

$('#table4').on('click', function () {
    $('#table4')
        .css("background-color", '#ADAAAA')
});

$('#table5').on('click', function () {
    $('#table5')
        .css("background-color", '#ADAAAA')
});

$('#table6').on('click', function () {
    $('#table6')
        .css("background-color", '#ADAAAA')
});

$('#table7').on('click', function () {
    $('#table7')
        .css("background-color", '#ADAAAA')
});

$('#table8').on('click', function () {
    $('#table8')
        .css("background-color", '#ADAAAA')
});

$('#table9').on('click', function () {
    $('#table9')
        .css("background-color", '#ADAAAA')
});
