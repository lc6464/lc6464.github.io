const timer = new Timer("2022-01-01T00:00:00.000+08:00"); // 实例化 Timer

function refresh(){
	const timing = timer.timing(); // 计时
	if (timing.countdown) {
		document.querySelector("#crossHours").innerText = timing.hours;
		document.querySelector("#crossMinutes").innerText = timing.minutes;
		document.querySelector("#crossSeconds").innerText = timing.seconds;
	} else {
		intervalID = clearInterval(intervalID);
		document.querySelector("#crossYear").innerHTML = "<h2>北京时间2022年已到！</h2><div>你好，2022！<br/>愿疫情早日结束，愿新的一年更加美好！</div>";
	}
}

let intervalID = setInterval(refresh, 200);