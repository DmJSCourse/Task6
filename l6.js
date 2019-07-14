$( "#add" ).click(addCat);

function addCat() {
    $( "#cats" ).after( '<div class="itembox" style="float: left;">' + $("#name").val() + " " + "(" + $("#age").val() + ')<br><img src="' + $("#link").val() + '"></div>');
    $("#name").val('');
    $("#age").val('');
    $("#link").val('');
};