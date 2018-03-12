var myVariable = 20;
var myWord = "Snow";
var visible = false;

// This is my function
function saysomething() {
	// Returns "hiiii" in the console
	console.log("hiiii" + myVariable + myWord);
}

function togglepic() {
	var img = document.getElementById("pic");
	if (visible) {
		// hide dog
		img.style.visibility = "hidden";
		visible = false;
	} else {
		// show dog
		img.style.visibility = "visible";
		visible = true;
	}
}