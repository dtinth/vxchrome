var logContainer = document.querySelector("#log");
var interimText = document.querySelector("#interim");
var finalText = document.querySelector("#final");
var ac = new AudioContext();

function tone(f, s) {
  const d = s * 0.05;
  const osc = ac.createOscillator();
  const gain = ac.createGain();

  osc.frequency.value = 220 * Math.pow(2, f / 12);
  osc.connect(gain);

  gain.gain.value = 0.25;
  gain.gain.setValueAtTime(0.25, ac.currentTime + d);
  gain.gain.linearRampToValueAtTime(0.0, ac.currentTime + d + 0.07);
  gain.connect(ac.destination);

  osc.start(ac.currentTime + d);
  osc.stop(ac.currentTime + d + 0.1);
}

function log(text) {
  const item = document.createElement("div");
  item.textContent = "[" + new Date().toJSON() + "] " + text;
  logContainer.appendChild(item);
  if (logContainer.childNodes.length > 10) {
    logContainer.removeChild(logContainer.firstChild);
  }
}

var recognition = new webkitSpeechRecognition();
var listening = false;
var endSounded = false;
var closeTimeout = null;
recognition.continuous = true;
recognition.interimResults = true;
recognition.onstart = function() {
  log("Ready to listen");
  tone(5, 0);
  tone(10, 1);
};
recognition.onerror = function() {
  if (event.error === "no-speech") {
    listening = false;
    log("Closed: No speech");
  }
  const sendError = message => {
    log("Error: " + message);
  };
  if (event.error === "audio-capture") {
    sendError("No microphone was found.");
  }
  if (event.error === "not-allowed") {
    sendError("Permission to use microphone is blocked.");
  }
  if (!endSounded) {
    tone(10, 0);
    tone(7, 1);
    tone(4, 2);
    endSounded = true;
  }
  clearTimeout(closeTimeout);
  closeTimeout = setTimeout(() => {
    window.close();
  }, 1000);
};
recognition.onend = function() {
  log("Ended");
  listening = false;
  if (!endSounded) {
    tone(15, 0);
    tone(8, 1);
    tone(1, 2);
    endSounded = true;
  }

  clearTimeout(closeTimeout);
  closeTimeout = setTimeout(() => {
    window.close();
  }, 1000);
};
recognition.onresult = function(event) {
  var finalTranscript = "";
  var interimTranscript = "";
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      finalTranscript += event.results[i][0].transcript;
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  interimText.textContent = interimTranscript;
  finalText.textContent = finalTranscript;
  if (finalTranscript) {
    copyTextToClipboard(finalTranscript.trim());
    tone(5, 0);
    tone(10, 1);
    tone(15, 2);
  }
};
function start(lang) {
  clearTimeout(closeTimeout);
  tone(0, 0);
  log("Start listening for " + lang);
  recognition.lang = lang;
  recognition.start();
  listening = true;
  endSounded = false;
}

function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand("copy");
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}

start(location.hash.match(/lang=([^&]+)/)[1]);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "toggle") {
    if (listening) {
      recognition.stop();
    } else {
      start(request.lang);
    }
    sendResponse({ ok: true });
  }
});
