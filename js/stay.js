var $ = document.querySelector.bind(document), timer = new Timer;
function refreshStay(timer, stayE) { var stay = timer.timing(); stayE[0].innerText = stay[0]; stayE[1].innerText = stay[1]; stayE[2].innerText = stay[2]; stayE[3].innerText = stay[3]; }
addEventListener('load', function () {
	var stayEle = $('#stay');
	if (stayEle !== null) {
		stayEle.innerHTML = '您已在本页停留 <span id="stayDay">0</span>天<span id="stayHour">0</span>时<span id="stayMin">0</span>分<span id="staySec">0</span>秒<button id="resetStay">重置计时</button>';
		var stayDay = $('#stayDay'), stayHour = $('#stayHour'), stayMin = $('#stayMin'), staySec = $('#staySec'); window.stayRefresh = setInterval(refreshStay, 500, timer, [stayDay, stayHour, stayMin, staySec]);
		$('#resetStay').onclick = function () { timer.reset(); refreshStay(timer, [stayDay, stayHour, stayMin, staySec]); };
	}
});