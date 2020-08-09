class Timer {
	constructor() { this.start = new Date(); }
	reset() { this.start = new Date(); }
	timing() {
		this.now = new Date(); var stayMs = (this.now.getTime() - this.start.getTime()), staySec = stayMs / 1000, stayMin = staySec / 60, stayHour = stayMin / 60;
		return [Math.floor(stayHour), Math.floor(stayMin % 60), Math.floor(staySec % 60), stayMs % 1000];
	}
}