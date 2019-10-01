$( "document" ).ready(function() {

var pigLatin = "";

$("#button").click(function() {
    pigLatin = $(".input").val();
    $(".output").text(pigLatin);

});

});