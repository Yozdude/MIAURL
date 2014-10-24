// Generate a URL with the given message and destination
var miaurlEncoding = function() {
	// Get the message and destination
	var msg = $("#message").val();
	var des = $("#destination").val();
	var error = false;
	
	// Check for errors, that ther is in fact a message and destination
	if (!msg) {
		$("#message").addClass("input-error");
		error =  true;
	} else {
		$("#message").removeClass("input-error");
	}
	if (!des) {
		$("#destination").addClass("input-error");
		error = true;
	} else {
		$("#destination").removeClass("input-error");
	}
	if (error) { return; }
	
	// Generate a URL containing the message that will redirect to the destination and display it
	var generated = "www.miaurl.com/" + window.btoa(des) + "/" + msg.trim().replace(new RegExp(" ","g"), "_");
	$("#generated").val(generated);
	$("#generated").fadeIn(500);
};

// Setup the initial view of the website
$(document).ready(function(){
	// Hide the generated URL field and clear errors
	$("#generated").fadeOut(0);
	$("#message").blur(function() {
		if ($("#message").val()) {
			$("#message").removeClass("input-error");
		} else {
			$("#message").addClass("input-error");
		}
	});
	$("#destination").blur(function() {
		if ($("#destination").val()) {
			$("#destination").removeClass("input-error");
		} else {
			$("#destination").addClass("input-error");
		}
	});
});