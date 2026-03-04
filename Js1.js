$(document).ready(function(){

    $("#contactForm").submit(function(event){
        event.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();

        if(name === "" || email === "") {
            $("#message").text("Please fill all fields.");
        } else {
            $("#message").text("Message sent successfully!");
        }
    });

});