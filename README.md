gmod-loadingscreen
==================

add a loading screen for your garrys mod server!

## See it in action

**[Demo - slightly modified](http://gabrielw.de/gmod/?steamid=76561198051267973&mapname=test)**

![Screenshot](http://i.imgur.com/kdmSZ18.png)

## Features

- Basic template built with bootstrap (responsive)
- Image slideshow with random pictures
- Random music with autoplay in background
- Welcome message with steam-player name
- Show on which map the player will join
- Show current music title

**Additional**
- rules.php for showing rules after server join for the `motd` (ULX has to be installed)

## Requirements

- PHP5.3+
- The script [needs allow_url_fopen=1](http://php.net/manual/de/filesystem.configuration.php#ini.allow-url-fopen)

## Installation

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

## Pull requests

Feel free to send a PR to improve this!

_styled with [bootstrap](http://getbootstrap.com/) & [cyborg theme](http://bootswatch.com/cyborg/)_
