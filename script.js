console.log(true);
// function myFunction(string) {
// 	return string.split("").reverse().join("").split(" ").reverse().join(" ");
// }
function myFunction(string) {
	let revWord = string
		.split(" ")
		.map((e) => {
			return e.split("").reverse().join("");
		})
		.join(" ");

	return revWord;
}

console.log(myFunction("reza aher jane del mamad"));
