var i = 0;
function time() {
  if (i == 0) {
    var clocktime = 0.015740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740;
    i = 1;
    var elem = document.getElementById("timerbackground");
    var starttime = 90*60;
    var width = 85;
    var round = 0;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        i = 0;
      } else {
        var butin = document.getElementById("timertext");
        var butins = document.getElementById("timertextmin");
        var clocktimer = starttime - round;
        var clocktimemin = Math.floor(clocktimer / 60);
        var clocktimesec = clocktimer - (clocktimemin*60);
        butin.innerHTML = clocktimemin + "min";
        butins.innerHTML = clocktimesec + "s";
        width = width - clocktime;
        elem.style.width = width + "%";
        round++;
      }
    }
  }
}