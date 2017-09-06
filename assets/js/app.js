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
        dqs('[data-personaname]').innerText = ' ' + data.response.players[0].personaname;
        dqs('[data-avatarfull]').setAttribute('src', data.response.players[0].avatarfull);
    });
    request.open('GET', crossOriginProvider);
    request.send();
})();

/* load rules */
gmodLS.rules.forEach(function(rule, index) {
    var liNode = document.createElement('li');
    liNode.innerHTML = (index+1) + '. ' + rule;
    dqs('[data-rules]').appendChild(liNode)
});

/* play music */
if (gmodLS.musicFiles.length > 0) {
    var randomMusic = Math.floor(Math.random() * gmodLS.musicFiles.length);
    var musicSource = document.createElement('source');
    musicSource.setAttribute('src', 'assets/' + gmodLS.musicFiles[randomMusic]);
    dqs('audio').volume = gmodLS.musicVolume;
    dqs('audio').appendChild(musicSource);
}

/* file loading progress percentage */
function updatePercentage(needed) {
    var totalFiles = parseInt(dqs('[data-files-total]').innerText);
    var percentage = isNaN(totalFiles) ? 'N/A' : (totalFiles - needed) / totalFiles * 100;
    
    dqs('[data-percentage]').innerText = Math.round(percentage);
    dqs('.progress').style.width       = percentage + '%';
    if (percentage == 100) {
        dqs('[data-currentfile]').innerText = 'finished.';
    }
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
    if (parseInt(total) == 0) {
        dqs('.loadingbar').style.display = 'none';
    }
    dqs('[data-files-total]').innerText = total;
}
function SetFilesNeeded( needed ) {
    var needed     = parseInt(needed);
    var totalFiles = parseInt(dqs('[data-files-total]').innerText);
    var loaded     = isNaN(totalFiles) ? 'N/A' : totalFiles - needed;
    dqs('[data-files-loaded]').innerText = loaded;
    updatePercentage(needed);
}
function SetStatusChanged( status ) {
    dqs('[data-status]').innerText = status;
}

// data-players-online
// data-rules