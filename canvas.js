var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
c.fillRect(100,100,100,100);
c.fillRect(200,300,100,100);
c.fillRect(300,500,100,100);
c.fillRect(600,400,100,100);

c.beginPath();
c.moveTo(50,500);
c.lineTo(300,100);
