
$(function () {

    $('#search').click(function (event) {

        event.preventDefault();
        $('.grid-container').empty();

        var keyword = $('#keyword').val();
        var count = $('#gifnumber').val();

        if (keyword == null || keyword == "") {
            alert("Enter a keyword to continue..");
        }
        if (keyword.length > 0) {
            if (count == null || count == "" || count < 1) {
                count = 1;
                alert("You entered a count less than 1, the default count of 1 will be used...")
            } else if (count > 32) {
                alert("You entered a number greater than 32, only 32 images will be diplayed...")
                count = 32;
            }            
        }

        var api_key = "ppBEiy71y5X2tugdfoKgFDp4XLBp22iD";
        var myUrl     = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${api_key}&limit=${count}`;


        $.get(myUrl).done(function (response) {
           
            for (var i = 0; i < response.data.length; i++) {
                var imageURL = '"' + response.data[i].images.preview_webp.url + '"';
                $('.grid-container').append(`<img class="grid-img" src=${imageURL}>`);  
            }

        });


    });

});