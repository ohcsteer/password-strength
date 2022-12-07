let container = document.querySelector(".container");
document.addEventListener("keyup", function(e) {
	let pass = document.querySelector("#password").value;
	let strength = zxcvbn(pass);
	document.getElementById("result").textContent = strength.feedback.warning;
	if (pass != "") {
		document.getElementById("crack-time").textContent = "Cracked in " + strength.crack_times_display.offline_slow_hashing_1e4_per_second;
		/*
			online_throttling_100_per_hour

			online_no_throttling_10_per_second

			offline_slow_hashing_1e4_per_second

			offline_fast_hashing_1e10_per_second
		*/
		if (strength.score == 0) {
			container.classList.add("none");
			container.classList.remove("bad");
			container.classList.remove("weak");
			container.classList.remove("good");
			container.classList.remove("strong");
		} else if (strength.score == 1) {
			container.classList.remove("none");
			container.classList.add("bad");
			container.classList.remove("weak");
			container.classList.remove("good");
			container.classList.remove("strong");
		} else if (strength.score == 2) {	
			container.classList.remove("none");
			container.classList.remove("bad");
			container.classList.add("weak");
			container.classList.remove("good");
			container.classList.remove("strong");
		} else if (strength.score == 3) {
			container.classList.remove("none");
			container.classList.remove("bad");
			container.classList.remove("weak");
			container.classList.add("good");
			container.classList.remove("strong");
		} else if (strength.score == 4) {
			container.classList.remove("none");
			container.classList.remove("bad");
			container.classList.remove("weak");
			container.classList.remove("good");
			container.classList.add("strong");
		}
	} else {
		document.getElementById("crack-time").textContent = "";
		container.classList.add("none");
		container.classList.remove("bad");
		container.classList.remove("weak");
		container.classList.remove("good");
		container.classList.remove("strong");
	}
});