const show = document.querySelector("#show");
const pass = document.querySelector("#password");

show.addEventListener("click", function() {
	this.classList.toggle("fa-eye-slash");
	if (pass.type === "password") {
		pass.type = "text";
	} else {
		pass.type = "password";
	}
});