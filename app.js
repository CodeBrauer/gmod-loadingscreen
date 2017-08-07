(function() {
    STEAM_WEB_API_KEY = '';

    var api_url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + STEAM_WEB_API_KEY + '&steamids=' + getQueryVariable('steamid');
    var script = document.createElement('script');
    script.src = 'https://json2jsonp.com/?url='+encodeURIComponent(api_url)+'&callback=steam_callback';
    script.addEventListener('error', function(e) {
        console.log(e);
    })
    document.body.appendChild(script);
})();

function _$(selector) {
    return document.querySelector(selector);
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

function steam_callback(data) {
    _$('[data-personaname]').innerText = data.response.players[0].personaname;
    _$('[data-mapname]').innerText = getQueryVariable('mapname');
    _$('[data-avatarfull]').setAttribute('src', data.response.players[0].avatarfull);
}