var stayTime = (function(){
    var start = new Date();
    return function(){
        var now = new Date(), stayMs = (now.getTime() - start.getTime()),
            staySec = stayMs / 1000, stayMin = staySec / 60, stayHour = stayMin / 60;
        return[Math.floor(stayHour), Math.floor(stayMin%60), Math.floor(staySec%60), stayMs%1000];
    }
})();