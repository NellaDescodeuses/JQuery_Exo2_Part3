var counter = 0;
$(document).ready(function () {
    //au clic sur le bouton +
    $('#more').click(function() { 
        //j'incrément ma variable counter
        counter++
        //j'affiche la valeur dans mon input.
       $('input').val(counter);
    });
    $('#less').click(function () { 
        //je décrémente.
        counter--
        $('input').val(counter);
    });
});
