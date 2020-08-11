var time = new Timer();
function refreshStay() { var stay = time.timing(); stayHour.innerText = stay[0]; stayMin.innerText = stay[1]; staySec.innerText = stay[2]; }
window.addEventListener('load', function () {
    var stayHour = document.querySelector('#stayHour'), stayMin = document.querySelector('#stayMin'), staySec = document.querySelector('#staySec'), stayMs = document.querySelector('#stayMs'), stayRefresh = setInterval(refreshStay, 500);
    document.querySelector('#resetStay').onclick = function () { time.reset(); refreshStay(); };
});