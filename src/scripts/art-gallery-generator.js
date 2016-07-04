var imagemin = require('imagemin');
var imageminGm = require('imagemin-gm');
var imageminJpegtran = require('imagemin-jpegtran');

var exec = require('child_process').exec;
exec("rm images/art/thumbnail/*");
exec("rm images/art/full/*");

imagemin(
  ['src/images/art/*'],
  'images/art/thumbnail',
  { use: [
      imageminGm.resize({ width: 300 }),
      imageminGm.convert('jpg'),
      // imageminJpegtran() // 373kb
      imageminJpegtran({ progressive: true }) // 367kb
    ]
  }
).then(function(){
	console.log('Thumbnails Generated');
});

imagemin(
  ['src/images/art/*'],
  'images/art/full',
  { use: [
      // imageminJpegtran() // 373kb
      imageminJpegtran({ progressive: true }) // 367kb
    ]
  }
).then(function(){
	console.log('Full Images Generated');
});
