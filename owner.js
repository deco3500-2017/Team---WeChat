$(document).ready(function(){
    $("div#add-job").click(function(){
        $("div#job-panel").toggle();
        $("div#job-form").toggle();
    });

    $("label#cancel-new-job").click(function(){
        $("div#job-form").toggle();
        $("div#job-panel").toggle();
    });

    $("label#confirm-new-job").click(function(){
        var pet_name = $("input#pet-name").val();
        $("input#pet-name").val(null);
        var pet_type = $("input#pet-type").val();
        $("input#pet-type").val(null);
        var pet_breed = $("input#pet-breed").val();
        $("input#pet-breed").val(null);
        var owner_name = $("input#owner-name").val();
        $("input#owner-name").val(null);
        var description = $("textarea#description").val();
        $("textarea#description").val(null);

        var $new_job_div = $('<div class="job" style="border:1px solid black; width=80%; margin:auto; margin-top:5px; padding:5px;">'+'Pet Name: '+pet_name+' Pet Type: '+pet_type+'<br>'+'Pet Breed: '+pet_breed+' Owner Name: '+owner_name+'<br>'+'Description: '+'<br>'+'<p>'+description+'</p>'+ '</div>');

        $("div#job-panel").prepend($new_job_div);

        $("div#job-form").toggle();
        $("div#job-panel").toggle();
    });

});
