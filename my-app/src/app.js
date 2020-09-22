$(document).ready(function(){
    $.ajax(
        {
            'url': 'http://localhost/php-ajax-dischi1/my-app/dischi-dp.php',
            'method':'GET',
            'success': function(risposta){
                printData(risposta);
                printAuthor(risposta);
            },
            'error': function(){
                alert('errore');
            }
        }
    );
    


$(document).on('change','select' ,function() {
    genere = $(this).val()

    $.ajax(
        {
            'url': 'http://localhost/php-ajax-dischi1/my-app/dischi-dp.php',
            'method':'GET',
            'success': function(risposta){
                estrapolateAuthor(risposta)
            },
            'error': function(){
                alert('errore');
            }
        }
    );
});

function printData(data){
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    for (var i = 0; i < data.length; i++){
        var context = {
            'title': data[i].title,
            'poster': data[i].poster,
            'author':data[i].author,
            'year':data[i].year
        };
        
        var html = template(context);
        $('.cds-container').append(html);
    }
}

function printAuthor(data){
    var source = document.getElementById("entry-template2").innerHTML;
    var template = Handlebars.compile(source);
    var artist = []
    for (var i = 0; i < data.length; i++){

        if(!artist.includes(data[i].author)){
            artist.push(data[i].author)
            var context = {
                'author':data[i].author,
            };
            var html = template(context);
            $('#authors').append(html);
        }
    }
    console.log(artist)
    
}

function estrapolateAuthor(data){
        $('.cds-container').text('')
        var authors = data;
        var source = $('#entry-template').html();
        var template = Handlebars.compile(source);
        for(var i=0; i < authors.length; i++){
            var author = authors[i];
            if(author.author === genere) {
                var selected = author;
                var html = template(selected);
                $('.cds-container').append(html);
            } else if (genere === 'all') {
                var selected = author;
                var html = template(selected);
                $('.cds-container').append(html);
            }


        }
}
});

