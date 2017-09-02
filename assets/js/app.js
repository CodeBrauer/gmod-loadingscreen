var steamID             = getQueryVariable('steamid');
var steamAPIURL         = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + gmodLS.steamWebApiKey + '&steamids=' + steamID;
var crossOriginProvider = 'http://anyorigin.com/go?url=' + encodeURIComponent(steamAPIURL) + '&callback=?';

/**
 * init everything
 */
document.body.style.backgroundImage = 'url(' + gmodLS.backgroundImg + ')';
$('[data-mapname]').text(getQueryVariable('mapname'));

/* call SteamWebapi for personaname & avatar */
$.getJSON(crossOriginProvider, function(data) {
    $('[data-personaname]').text(' ' + data.contents.response.players[0].personaname);
    $('[data-avatarfull]').attr('src', data.contents.response.players[0].avatarfull);
});

function updatePercentage(needed) {
    var totalFiles = parseInt($('[data-files-total]').text());
    var percentage = isNaN(totalFiles) ? '-' : (totalFiles-needed) / totalFiles * 100;
    $('[data-percentage]').text(Math.round(percentage));
    $('.progress').width(percentage + '%');
}
/**
 * gmod called functions
 */
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
    $('[data-servername]').text(servername);
    $('[data-maxplayers]').text(maxplayers);
    $('[data-gamemode]').text(gamemode);
}
function DownloadingFile( fileName ) {
    $('[data-currentfile]').text(fileName);
}
function SetFilesTotal( total ) {
    $('[data-files-total]').text(total);
}
function SetFilesNeeded( needed ) {
    var totalFiles = parseInt($('[data-files-total]').text());
    var loaded     = isNaN(totalFiles) ? '-' : totalFiles-needed;
    $('[data-files-loaded]').text(loaded);
    updatePercentage(needed);
}
function SetStatusChanged( status ) {
    $('[data-status]').text(status);
}

// data-players-online
// data-rules