class Timer {
	constructor(time) { this.start = new Date(time == null ? Date.now() : time); }
	reset(time) { this.start = new Date(time == null ? Date.now() : time); }
	timing(now) {
		this.now = new Date(now == null ? Date.now() : now); var stayMs = (this.now.getTime() - this.start.getTime()), staySec = stayMs / 1000, stayMin = staySec / 60, stayHour = stayMin / 60;
		return [Math.floor(stayHour), Math.floor(stayMin % 60), Math.floor(staySec % 60), stayMs % 1000];
	}
}