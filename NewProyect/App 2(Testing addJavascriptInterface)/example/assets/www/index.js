function doFirst(){
	barsize=20;
myMovie=document.getElementById('myMovie');
playButton=document.getElementById('playButton');
bar=document.getElementById('defaultBar');
progressBar=document.getElementById('progressBar');
playButton.addEventListener('click',playOrPause,false);
bar.addEventListener('click',playOrPause,false);
}

function playOrPause(){
if(!myMovie.paused && !myMovie.ended){
myMovie.pause();
playButton.innerHTML='Play';
window.clearInterval(updateBar);}else{
myMovie.play();
playButton.innerHTML='Pause';
updateBar=setInterval(update,500);
}
}
function py(){
window.plugins.videoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
}

/*<!DOCTYPE HTML>
<html lang="en">
  <head>
<link rel="stylesheet" href="index.css">
<meta charset="utf-8"/>
    <title>Test video player
</title>
    <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
   
<script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
<script type="text/javascript" charset="utf-8" src="video.js"></script>
   
<script src="index.js"></script>
    <script type="text/javascript" charset="utf-8" src="DrupalGap/drupalgap.js"></script>
  </head>
  <body onload="doFirst()">
<section id="skin">
<video id="myMovie" widht="200" height="200">
<source src="video/myc.mp4">
</video>
<nav>
	<div id="buttons">
		<button type="button" id="playButton">Play</button>
	</div>
	<div id="defaultBar">
		<div id="progressBar">
		</div>
	</div>
	<div style="clear:both">
	</div>

</nav>
</section>
</body>
</html>*/
