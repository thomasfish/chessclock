// VARIABLES
var started = false;
var active = "l";
var lt = 60.00;
var rt = 60.00;

// FUNCTIONS
function tgo() {
  if (!started) {
    started = true;
    setInterval(function() {
      timecheck();
    }, 10);
  } else {
    tswitch();
  }
}

function tswitch() {
  if (active == "l") {
    active = "r";
    elem("lc").className = "left notactive";
    elem("rc").className = "right active";
  } else if(active == "r") {
    active = "l";
    elem("rc").className = "right notactive";
    elem("lc").className = "left active";
  }
}

function timecheck() {
  if (active == "l") {
    lt = lt - 0.01;
    if (lt < 0) { lt = 0; elem("msg").innerHTML = "Refresh to Restart"; }
    elem("lt").innerHTML = lt.toFixed(2);
  }
  if (active == "r") {
    rt = rt - 0.01;
    if (rt < 0) { rt = 0; elem("msg").innerHTML = "Refresh to Restart"; }
    elem("rt").innerHTML = rt.toFixed(2);
  }
}

function elem(id) {
  return document.getElementById(id);
}
