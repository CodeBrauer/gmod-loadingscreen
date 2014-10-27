gmod-loadingscreen
==================

a garrys mod loading screen

## a new version is coming soon!
It can be found here: [CodeBrauer/gmod-loadingscreen-2](https://github.com/CodeBrauer/gmod-loadingscreen-2) 
(currently in planning)


## demo

**[see it in action here // can be a modified version..](http://gabrielw.de/gmod/?steamid=76561198051267973&mapname=test)**

**[Screenshot](http://i.imgur.com/kdmSZ18.png)**

## features

- Image slideshow with random pictures
- Random music with autoplay in background
- welcome message with steam-player name
- show on which map the player will join
- show current music title

**additional**
- rules.php for showing rules after server join for the `motd` (ULX has to be installed)


## pull requests

please don't send me any pull requests. I planned to make the project better for people that have no "idea" of programming - so I will make it my freetime. At the moment there is no time - but soon!

## how to use

* put 3 music files in `.ogg`-format in the music folder. They must be named `1.ogg`, `2.ogg` and `3.ogg`!
* put the music artists on line 12-14 in `index.php`
* get a steam web-api key [here](http://steamcommunity.com/dev/apikey)
* replace the `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` in `index.php` on line 24 with your personal api key.
* upload this code somewhere
 * you don't have a webserver with PHP support? look [here](http://www.000webhost.com/) or [here](http://www.square7.ch/)!
* set the url of the loading screen in your `server.cfg` like that `sv_loadingurl "http://example.com/gmod-loadingscreen/?steamid=%s&mapname=%m"`
* restart server.
* enjoy.

The server name and the content of the page can be easily edited with basic knowledge of HTML. in the next version there will be a easy config file so its easier to customize :bowtie:

_requires php5_ &middot; _styled with [bootstrap](http://getbootstrap.com/) & [cyborg theme](http://bootswatch.com/cyborg/)_





