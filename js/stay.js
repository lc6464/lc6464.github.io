var $ = document.querySelector.bind(document), timer = new Timer;
function refreshStay(timer, stayEs) { var stay = timer.timing(); for (var i = 0; i < 4; i++) { stayEs[i].innerText = stay[i]; } }
addEventListener('load', function () {
	var e = $('#stay');
	if (e !== null) {
		e.innerHTML = '您已停留 <span id="sDay">0</span>天<span id="sHour">0</span>时<span id="sMin">0</span>分<span id="sSec">0</span>秒<button id="rStay">重置计时</button>';
		var stayEs = [$('#sDay'), $('#sHour'), $('#sMin'), $('#sSec')]; window.stayRefresh = setInterval(refreshStay, 500, timer, stayEs);
		$('#rStay').onclick = function () { timer.reset(); refreshStay(timer, stayEs); };
	}
});