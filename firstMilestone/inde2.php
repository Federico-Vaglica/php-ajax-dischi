<?php include 'album.php'?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>ex-dischi-musicali</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <div class="container">
                <img src="https://raw.githubusercontent.com/Federico-Vaglica/js-jq-ajax-api-musica/master/logo.png" alt="logo" />
            </div>
        </header>

        <div class="cds-container container">
            <!-- Disco ad esempio -->
        <?php foreach($database as $cd) {?>
            <div class="cd">
                <img src="<?php echo $cd['poster']; ?>" alt="<?php echo $cd['title'];?>">
                <h3><?php echo $cd['title'];?></h3>
                <span class="author"><?php echo $cd['author']; ?></span>
                <span class="year"><?php echo $cd['year']; ?></span>
            </div>
        <?php }?>
        </div>

    </body> 
</html>
    