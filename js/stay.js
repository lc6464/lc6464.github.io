var $ = document.querySelector.bind(document), time = new Timer;
function refreshStay(time, stayDay, stayHour, stayMin, staySec) { var stay = time.timing(); stayDay.innerText = stay[0]; stayHour.innerText = stay[1]; stayMin.innerText = stay[2]; staySec.innerText = stay[3]; }
addEventListener('load', function () {
	var stay = $('#stay');
	if (stay !== null) {
		stay.innerHTML = '您已在本页停留 <span id="stayDay">0</span>天<span id="stayHour">0</span>时<span id="stayMin">0</span>分<span id="staySec">0</span>秒<button id="resetStay">重置计时</button>';
		var stayDay = $('#stayDay'), stayHour = $('#stayHour'), stayMin = $('#stayMin'), staySec = $('#staySec'); window.stayRefresh = setInterval(refreshStay, 500, time, stayDay, stayHour, stayMin, staySec);
		$('#resetStay').onclick = function () { time.reset(); refreshStay(time, stayHour, stayMin, staySec); };
	}
});