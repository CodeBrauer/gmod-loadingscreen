<?php

error_reporting(0);
@set_time_limit(3);

$r       = mt_rand(1,3);
$plname  = 'Player';
$map     = '';
$avatar  = 'img/nouser.png';

$authors = array(
    1 => 'FIRST SONG NAME',
    2 => 'SECOND SONG NAME',
    3 => 'THIRD SONG NAME'
);

$pictures = array(1,2,3);
shuffle($pictures);

if (isset($_GET['mapname']))
    $map = '<br>You will play the map: '.$_GET['mapname'];

if (isset($_GET['steamid'])) {
    $data = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&steamids='.$_GET['steamid'];
    $f = file_get_contents($data);
    $arr = json_decode($f, true);
    if (isset($arr['response']['players'][0]['personaname']))
        $plname = $arr['response']['players'][0]['personaname'];
    if (isset($arr['response']['players'][0]['avatar']))
        $avatar = $arr['response']['players'][0]['avatar'];
    
}

?>
<!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro">

    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>
<body> 
    <audio autoplay loop>
        <source src="music/<?php echo $r?>.ogg" type="audio/ogg">
    </audio>
    <div class="container">
        <div class="jumbotron" style="margin-top: 50px;">
            <div class="pull-right cycle-slideshow" data-cycle-fx="none">
                <?php foreach ($pictures as $pic) {
                    echo '<img src="img/'.$pic.'.jpg" alt="Picture '.$pic.'" class="imgtop img-rounded">';
                }?>
            </div>
            <h1 id="title" class="bigEntrance" style="font-size: 50px;">Cheesy Hans Gaming</h1>
            <p class="lead">
                Welcome to our TTT-Server. Have fun!<br>
                <small>
                    <ul style="line-height: 1.6;">
                        <li>Be friendly.</li>
                        <li>No random killing - low karma autoban enabled.</li>
                        <li>No Ghosting!</li>
                        <li>Only English or German.</li>
                        <li>Admins are kicking/baning if something is wrong.</li>
                    </ul>
                    All used Workshop items can be found here:
                    <br>
                    <code>www.steamcommunity.com/id/<b>xunocore</b></code><br>→ TTT-Servercontent DL (Link)
                </small>
            </p>

        </div>
    </div>
    <div style="position: absolute;bottom: 0px;left: 20px;font-size: 12px;min-width: 260px;" class="well well-sm">
        <img src="<?php echo $avatar?>" alt="" class="pull-right img-circle">
        Hello, <b><?php echo $plname ?></b><?php echo $map ?><br>
        Music: "<?php echo $authors[$r];?>"
    </div>
    <script src="js/vendor/jquery-1.10.1.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/jquery.cycle2.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
