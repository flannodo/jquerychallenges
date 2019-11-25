$('#useBilling').click(function() {
	var home = $('#home');
	if (this.checked) {
		console.log("selected");
		$('#home').val($("#billing").val());
		$('#home').prop("disabled", true);
	} 
	else {
		console.log("unselected");
		$("#home").val("");
		$('#home').prop("disabled", false);
	}
});


// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");

// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}