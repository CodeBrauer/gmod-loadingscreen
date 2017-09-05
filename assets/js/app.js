var steamID             = getQueryVariable('steamid');
var steamAPIURL         = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + gmodLS.steamWebApiKey + '&steamids=' + steamID;
var crossOriginProvider = 'https://ignorecors-yipksgwdit.now.sh/?url=' + encodeURIComponent(steamAPIURL);

/**
 * init everything
 */
document.body.style.backgroundImage = 'url(' + gmodLS.backgroundImg + ')';
dqs('[data-mapname]').innerText     = getQueryVariable('mapname');

/* call SteamWebapi for personaname & avatar */
(function callSteamWebApi() {
    var request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        var data = JSON.parse(this.responseText);
        console.log(data);
        dqs('[data-personaname]').innerText = ' ' + data.response.players[0].personaname;
        dqs('[data-avatarfull]').setAttribute('src', data.response.players[0].avatarfull);
    });
    request.open('GET', crossOriginProvider);
    request.send();
})();

function updatePercentage(needed) {
    var totalFiles = parseInt(dqs('[data-files-total]').innerText);
    var percentage = isNaN(totalFiles) ? '-' : (totalFiles-needed) / totalFiles * 100;
    
    dqs('[data-percentage]').innerText = Math.round(percentage);
    dqs('.progress').style.width       = percentage + '%';
}
/**
 * gmod called functions
 */
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
    dqs('[data-servername]').innerText = servername;
    dqs('[data-maxplayers]').innerText = maxplayers;
    dqs('[data-gamemode]').innerText   = gamemode;
}
function DownloadingFile( fileName ) {
    dqs('[data-currentfile]').innerText = fileName;
}
function SetFilesTotal( total ) {
    dqs('[data-files-total]').innerText = total;
}
function SetFilesNeeded( needed ) {
    var totalFiles = parseInt(dqs('[data-files-total]').innerText);
    var loaded     = isNaN(totalFiles) ? '-' : totalFiles - needed;
    dqs('[data-files-loaded]').innerText = loaded;
    updatePercentage(needed);
}
function SetStatusChanged( status ) {
    dqs('[data-status]').innerText = status;
}

// data-players-online
// data-rules