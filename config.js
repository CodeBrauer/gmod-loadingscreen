var gmodLS = {}

/**
 * To get the users avatar and username, a steam web api key is needed.
 * You can get it with your steam account for free here: https://steamcommunity.com/dev/apikey
 * @type {String}
 */
gmodLS.steamWebApiKey = '64CDF653E45DFF6144F74EE6501C43A5';

/**
 * A URI path or full URL to the loadingscreen background.
 * Will be centered and streched if needed to the users resolution
 * @type {String}
 */
gmodLS.backgroundImg  = 'https://files.facepunch.com/s/f3f82956055e.jpg';

/**
 * If you want music played in background add your music files here.
 * The music files must be in OGG format to be played correctly.
 * @type {Array}
 */
gmodLS.musicFiles = [
    'music/1.ogg',
    'music/2.ogg',
    'music/3.ogg',
];

/**
 * Music volume (Float value, max=1)
 * 0   = off/no music
 * 0.5 = 50% volume
 * 1   = full volume
 * @type {Number}
 */
gmodLS.musicVolume = .1;

/**
 * Serverrules - One rule per row
 * @type {Array}
 */
gmodLS.rules = [
    "Don't spam mic/chat",
    "Be friendly",
    "No RDM'ing",
    "No ghosting",
];