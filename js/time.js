var app = {
	init: function() {
		this.d = new Date();
		console.log(this.d);

		//Gets hrs, mins, secs, passes it to checkTime function and saves the returned value
		this.hrs = this.checkTime(this.d.getHours());
		this.mins = this.checkTime(this.d.getMinutes());
		this.secs = this.checkTime(this.d.getSeconds());

		this.curTime = this.hrs + " : " + this.mins + " : " + this.secs; //Concatenates using : sign

		this.hex = this.hexGenerator(this.hrs, this.mins, this.secs); //generates a hex value

		this.changeDisplay();
		return;
	},

	checkTime: function(t) { //Adds a zero if value is less than 10
		if (t < 10) {
			t = "0" + t;
		}

		return t;
	},

	hexGenerator: function(h, m, s) {
		hex = '#' + h + m + s;

		return hex;
	},

	changeDisplay: function() {
		document.bgColor = this.hex; 
		document.getElementById("current-time").innerHTML = this.curTime;
		document.getElementById("hex-code").innerHTML = this.hex;

		this.timer();
		return;
	},

	timer: function() {
		setTimeout(function(){ 
			app.init();
		}, 1000);
		return;
	}
};

window.load = app.init();