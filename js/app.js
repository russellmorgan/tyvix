$(document).ready(function() {
    //show modals
    $(".star").click(function() {
        var loc = $(this).attr("alt");
        loc = loc+".html";
        $.get( loc, function( data ) {
            $( ".modal" ).html(data).fadeIn(200);
        })
        .done(function() {
            console.log("completed task");
               //dismiss modals
                $(".fa-times").click(function() {
                    $(".modal").hide();
                })     
        })
        .fail(function() {
            alert("Sorry, something went wrong with that request. Please try again");
        })
    })

});