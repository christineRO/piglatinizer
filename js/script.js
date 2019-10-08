$("document").ready(function() {

    var vowel = ['a', 'e', 'i', 'o', 'u'];

    var pigLatin = "";

    $("#button").click(function() {
        pigLatin = $(".input").val();
        var words = pigLatin.split(' ');
        console.log(words);
        console.log(pigLatin);

        $(".output").text(pigLatin);

        words.forEach(function(word){
            var st1 = word.charAt(0);
            vowel.includes(st1);
        console.log(st1);
        console.log(words);
        });


    });

});