var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var score = document.querySelector('audio');
var state = {
stars: {},
hasStars: false
};

score.load();
setTimeout(intro, 0.03);
setTimeout(crawl, 8133.7);

function intro() {
var aside = document.querySelector('aside');
aside.className = 'show';
setTimeout(function() {aside.className = '';}, 5911);
}

function crawl() {
var section = document.querySelector('section');
var header = document.querySelector('header');
score.volume = .80;
score.currentTime = 0;
header.className = 'fade';
stars(); 
score.play();
section.childNodes[1].className = 'crawl roll';
state.hasStars = true;
function fadeOut() {
var a = setInterval(function() {
var vol = (score.volume - 0.005).toFixed(3);
if (vol >= 0.0) {
score.volume = vol;
} else {
score.pause();
clearInterval(a);
section.childNodes[1].className = 'crawl';
header.className = '';
howdy();
}
}, 20);
}
setTimeout(fadeOut, 50000);
}

function howdy() {
var footer = document.querySelector('footer');
var email = document.querySelector('.liame');
var yoBot = 'mailto:';
var isWeak = '@gmail.com';
footer.className = 'show';
email.href = yoBot + 'danmasquelier+danmasq ' + isWeak + '?subject=Hey Dan';
}

function stars() {
var stars = 2000;
for (var i = 0; i < stars; i++) {
var x = Math.random() * canvas.offsetWidth;
var y = Math.random() * canvas.offsetHeight;
var radius = Math.random() * 1.3;
context.beginPath();
context.arc(x, y, radius, 0, 99999);
context.fillStyle = "hsla(200,100%,87%,0.9)";
context.fill();
}
}

window.addEventListener('resize', wat, false);
function wat() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
state.hasStars && stars();
}

function ts() {
if (state.hasStars) {
score.paused ? score.play() : score.pause();	
} else {
score.play() && score.pause();	
}
}
document.addEventListener('touchstart', ts);
wat();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create','UA-35022359-1','auto');
ga('send','pageview');
