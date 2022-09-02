var finished = "CamX: Rebirth has launched!";
var eventTitle = "CamX: Rebirth launches"
// var countDownDate = new Date("Sep 02, 2022 6:44:05 AM").getTime();
var countDownDate = new Date("Dec 30, 2023 12:00:00 PM").getTime();
var pulse = true
var mute = false

function runAfterFinish() {
    setInterval(tickAfterFinish(), 1000)
    document.getElementById("bg").style = "background-image: url('http://TABL-JHSS-80488/html/countdown_clocks/assets/cxrLogo.png'); width:1920px; height:1080; position:fixed; filter: opacity(0.2);background-position-x: left;background-position-y: top; animation: backgroundPulse; animation-duration: 5s; animation-iteration-count: infinite;animation-timing-function:ease-in-out"
}

function disablePulseEffect() {
    if (pulse) {
        pulse = false
        document.getElementById("pulseBTTN").innerHTML = "Enable pulsing"
    } else {
        pulse = true
        document.getElementById("pulseBTTN").innerHTML = "Disable pulsing"
    }
}

function muteAudio() {
    if (mute) {
        mute = false
        document.getElementById("mute").innerHTML = "Mute"
        loop.play()
    } else {
        mute = true
        document.getElementById("mute").innerHTML = "Unmute"
        loop.pause()
    }
}

function loadTimer() {
    document.getElementById("body").style = "background-color: black"
    document.getElementById("loadbutton").remove()
    loop.play()
    document.getElementById("bg").style = "background-image: url('http://TABL-JHSS-80488/html/countdown_clocks/assets/cxrLogo.png'); width:1920px; height:1080; position:fixed; filter: opacity(0.2);background-position-x: left;background-position-y: top; animation: backgroundAnimation; animation-duration: 10s; animation-iteration-count: infinite;animation-timing-function:cubic-bezier(0.6, -0.28, 0.735, 0.045);z-index: -999"

    // document.getElementById("bg").style = "background-image: url('http://TABL-JHSS-80488/html/countdown_clocks/assets/cxrLogo.png'); width:1920px; height:1080; position:fixed; filter: opacity(0.2);background-position-x: left;background-position-y: top; animation: backgroundPulse; animation-duration: 5s; animation-iteration-count: infinite;animation-timing-function:ease-in-out"
}

function tickAfterFinish()  {
    var now = new Date().getTime();
    var howLongAgo = now - countDownDate;

    var days = Math.floor(howLongAgo / (1000 * 60 * 60 * 24));
    var hours = Math.floor((howLongAgo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((howLongAgo % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((howLongAgo % (1000 * 60)) / 1000);

    if (String(seconds).length == 1) {
        seconds = "0" + seconds
    }

    document.getElementById("demo").style = "color: green; font-size: 65px; font-family:'Garamond'; padding-top: 20%; "
    document.getElementById("redirect").style="display:sticky;filter:opacity(1);animation:fadeInButton;animation-duration:2.5s"
    if (pulse) {
        document.getElementById("elapsed").style = "color: green; font-size: 65px; font-family:'Garamond'; animation: finishedPulse; animation-duration: 1s; animation-iteration-count: infinite"
    } else {
        document.getElementById("elapsed").style = "color: green; font-size: 65px; font-family:'Garamond';"
    }
    document.getElementById("demo").innerHTML = finished;
    document.getElementById("elapsed").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds ago"
    document.getElementById("title").innerHTML = "+" + hours + ":" + minutes + ":" + seconds;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function tick() {
// Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    var days = 0
//   var hours = 0
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (String(days).length == 1) {
    days = "0" + days
}

  if (String(hours).length == 1) {
    hours = "0" + hours
}

  if (String(minutes).length == 1) {
      minutes = "0" + minutes
  }

  if (String(seconds).length == 1) {
      seconds = "0" + seconds
  }

  // Display the result in the element with id="demo"

  // Reset color back to normal
  document.getElementById("demo").style = "font-size: 45px; color: white; font-family:'Garamond'; padding-top: 20%;transition-duration:1s;"

  if (days == 0) {
      document.getElementById("demo").style = "color: yellow; font-size: 45px; font-family:'Garamond'; padding-top: 20%;transition-duration:1s;"
  }
  if (hours < 6 && days == 0) {
      document.getElementById("demo").style = "color: orange; font-size: 45px; font-family:'Garamond'; padding-top: 20%;transition-duration:1s;"
  }
  if (hours < 1 && days == 0) {
      document.getElementById("demo").style = "color: #fc6b03; font-size: 45px; font-family:'Garamond'; padding-top: 20%;transition-duration:1s;"
  }
  if (hours == 0 && days == 0 && minutes < 30) {
    document.getElementById("demo").style = "color: pink; font-size: 45px; font-family:'Garamond'; padding-top: 20%;transition-duration:1s;"
  }
  if (hours == 0 && days == 0 && minutes < 10) {
    document.getElementById("demo").style = "color: #db3f0f; font-size: 45px; font-family:'Impact'; letter-spacing:3px; padding-top: 20%;transition-duration:1s;"
  }


  document.getElementById("demo").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds until " + eventTitle;

  if (document.visibilityState == 'visible') {
    document.getElementById("title").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

    if (mute == false) {
        loop.play()
    }

    if (days == 0 && hours == 00 && minutes < 05){
        audio.play();
        loop.pause()
        if (pulse) {
            document.getElementById("demo").style = "color:rgb(109, 255, 158); font-size: 45px; font-family:'Impact'; letter-spacing:3px; padding-top: 20%; animation: pulse; animation-duration: 1s; animation-iteration-count: infinite"
        } else {
            document.getElementById("demo").style = "color:rgb(109, 255, 158); font-size: 45px; font-family:'Impact'; letter-spacing:3px; padding-top: 20%"
        }
      }

  } else {
    document.getElementById("title").innerHTML = "[Throttled] " + days + ":" + hours + ":" + minutes + ":" + seconds;
    document.getElementById("demo").style = "color: #303030; font-size: 45px; font-family:'Garamond'; padding-top: 20%;"
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    runAfterFinish()
  }
}