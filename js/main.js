
$(function () {


    $('#search').click(function (event) {
        //debugger;

        event.preventDefault();
        $('.grid-container').empty();

        keyError.textContent = "";
        countError.textContent = "";
        searchError.textContent = "";

        var keyword = $('#keyword').val();
        var count = $('#gifnumber').val();
        const element = document.getElementById('keyword');
        count = Math.floor(count);


        if (keyword === null || keyword === "") {
            keyError.textContent = 'Keyword required';
            keyError.style.display = 'block';
            element.style.border = '1px solid red';

        }
        else {
            element.style.border = '1px solid lightgray';
        }
        if (keyword.length > 0) {
            if (count === null || count === "" || count < 1) {

                count = 1;

                countError.textContent = 'Min is 1';
                countError.style.display = 'block';
            }
            else if (count > 32) {

                countError.textContent = 'Max is 32';
                countError.style.display = 'block';
                count = 32;
            }
        }

        var api_key = "ppBEiy71y5X2tugdfoKgFDp4XLBp22iD";
        var myUrl = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${api_key}&limit=${count}&rating=g`;


        $.get(myUrl).done(function (response) {

            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    var imageURL = '"' + response.data[i].images.preview_webp.url + '"';
                    $('.grid-container').append(`<img class="grid-img" src=${imageURL}>`);
                }
            }
            else {
                if (keyword.length > 0) {
                    searchError.textContent = `No GIFs found for ${keyword}`;
                    searchError.style.display = 'block';
                }
            }

        });

    });

});