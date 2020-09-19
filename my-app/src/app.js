$(document).ready(function(){
    $.ajax(
        {
            'url': 'http://localhost/php-ajax-dischi1/my-app/dischi-dp.php',
            'method':'GET',
            'success': function(risposta){
                console.log(risposta)
                printData(risposta)
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
    console.log(data.length)
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