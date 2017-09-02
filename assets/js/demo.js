GameDetails( 'Testserver', 'http://localhost/index.html', 'cs_office', 14, 76561198051267973, 'prophunt' );

var demofiles = [
    'materials/models/prophunt/car.mdl',
    'materials/models/prophunt/car2.mdl',
    'materials/models/prophunt/eggtimer.mdl',
    'materials/models/prophunt/bottle.mdl',
    'materials/models/prophunt/bottle2.mdl',
    'materials/models/prophunt/gastank.mdl',
    'materials/models/prophunt/camera.mdl',
    'materials/models/prophunt/something.mdl',
    'materials/models/prophunt/table.mdl',
    'materials/models/prophunt/chair.mdl',
    'materials/models/prophunt/chair2.mdl',
    'materials/models/prophunt/chair3.mdl',
    'materials/models/prophunt/bin.mdl',
    'materials/models/prophunt/tire.mdl',
    'materials/models/prophunt/tire2.mdl',
    'materials/models/prophunt/key.mdl',
    'materials/models/prophunt/door.mdl',
    'materials/models/prophunt/door2.mdl',
];

SetStatusChanged( 'Downloading some demo files...' );
SetFilesTotal( demofiles.length );
var index = 0;
setInterval(function() {
    if (index > demofiles.length) {return;}
    DownloadingFile( demofiles[index] );
    SetFilesNeeded( demofiles.length - index );
    index++;
}, 200);