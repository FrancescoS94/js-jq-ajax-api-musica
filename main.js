// Attraverso una chiamata ajax all’Api di boolean avremo
// a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// Bonus: Creare una select con i seguenti generi:
// pop, rock, metal e jazz. In base a cosa scegliamo
// nella select vedremo i corrispondenti cd.

$(document).ready(function() {
    // Chiamata Ajax all'API di Boolean.
    $.ajax(
    {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function (risposta) {
            // Compilo un template in JS usando Handlebars.
            var source = $("#entry-template").html();
            var template = Handlebars.compile(source);

            for (var i = 0; i < risposta.response.length; i++) {
                var cd = risposta.response[i];
                var html = template(cd);

                $(".cds-container").append(html);
            };
        },
        error: function () {
        alert("E' avvenuto un errore.");
     }
    }
    );
    // BONUS.
    $("#scelta option").click(function() {
        var genere = $(this).html();

        // Nascondo tutti gli elementi; visualizzo gli elementi
        // con la classe uguale alla option selezionata.
        if (genere == "All") {
            $(".cd").show();
        } else {
            $(".cd").hide();
            $(".cd." + genere).show();
        };
    });
});
