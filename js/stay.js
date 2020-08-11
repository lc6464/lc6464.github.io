var time = new Timer();
function refreshStay(time, stayHour, stayMin, staySec) { var stay = time.timing(); stayHour.innerText = stay[0]; stayMin.innerText = stay[1]; staySec.innerText = stay[2]; }
window.addEventListener('load', function () {
    var stay = document.querySelector('#stay');
    if (stay !== null) {
        stay.innerHTML = '您已在本页停留 <span id="stayHour">0</span>时<span id="stayMin">0</span>分<span id="staySec">0</span>秒<button id="resetStay">重置计时</button>';
        var stayHour = document.querySelector('#stayHour'), stayMin = document.querySelector('#stayMin'), staySec = document.querySelector('#staySec'); window.stayRefresh = setInterval(refreshStay, 500, time, stayHour, stayMin, staySec);
        document.querySelector('#resetStay').onclick = function () { time.reset(); refreshStay(time, stayHour, stayMin, staySec); };
    }
});