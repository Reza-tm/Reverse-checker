function myFunction() {
	let myInput = document.getElementById("input");
	let result = document.getElementById("result");
	let mamad = myInput.value
		.split(" ")
		.map((e) => {
			return e.split("").reverse().join("");
		})
		.join(" ");
	result.textContent = "Result :" + " " + mamad;
}
