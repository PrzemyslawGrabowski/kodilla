function rysujChoinke(n) {
    for (var i = 1; i <= n; i++) {
        var star = '';
		var space = '';	
			for (var j=i; j<n; j++) {
				space += ' ';
			}
			for (var j = 0; j < i * 2 - 1; j++) {
				star += '*';
			}
			console.log(space, star)
	}
}
rysujChoinke(16)