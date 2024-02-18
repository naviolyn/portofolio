var i = 0;
var txt = "Hello, I'm    ";
var speed = 200;

var z = 0;
var t = "Nancy Nadine";
var spd = 150;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
    if (z < t.length) {
        document.getElementById("por").innerHTML += t.charAt(z);
        z++;
        setTimeout(type, spd);
      }
  }
};
