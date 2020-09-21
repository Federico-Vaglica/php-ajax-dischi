<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>ex-dischi-musicali</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="dist/app.css">
    </head>
    <body>
        <header>
            <div class="container">
                <img src="https://raw.githubusercontent.com/Federico-Vaglica/js-jq-ajax-api-musica/master/logo.png" alt="logo" />
            </div>
        </header>
        <select name="authors" id="authors">
            <option value="all">All Authors</option>
        </select>
        <div class="cds-container container">
            <!-- Disco ad esempio -->
        </div>
        <script id="entry-template" type="text/x-handlebars-template">
            <div class="cd">
                <img src="{{poster}}" alt="{{title}}">
                <h3>{{title}}</h3>
                <span class="author">{{author}}</span>
                <span class="year">{{year}}</span>
            </div>
        </script>

        <p>ciao</p>
        <script id="entry-template2" type="text/x-handlebars-template">
                <option value="{{author}}">{{author}}</option>
        </script>
        <script src="dist/app.js"></script>
    </body>
</html>