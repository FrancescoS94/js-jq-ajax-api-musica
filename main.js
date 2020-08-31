// Attraverso una chiamata ajax all’Api di boolean avremo
// a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.

$(document).ready(function() {
    // Chiamata Ajax all'API di Boolean.
    $.ajax(
    {
        "url": "https://flynn.boolean.careers/exercises/api/array/music",
        "method": "GET",
        "success": function (risposta) {

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
});
