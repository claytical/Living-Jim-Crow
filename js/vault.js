var vaultOpen = false;

function openVault() {
	vaultOpen = true;
	$("#story-container").addClass("pure-g");
	$("#story").removeClass("pure-u-3-3");
	$("#story").addClass("pure-u-2-3");
	$("#vault").show();
}

function closeVault() {
	vaultOpen = false;
	$("#story-container").removeClass("pure-g");
	$("#story").removeClass("pure-u-2-3");
	$("#story").addClass("pure-u-3-3");
	$("#vault").hide();

}

function toggleVault() {
	if(vaultOpen) {
		closeVault();
	}
	else {
		openVault();
	}
}

function unlock(item) {
	console.log("Unlocking " + item);
	switch(item) {
		case "nih1":
			console.log("NIH Article");
			break;
		case "nejm1":
			console.log("NEJM Article");
			break;
		case "newyorker1":
			console.log("https://www.newyorker.com/magazine/2018/02/05/what-does-it-mean-to-die");
			break;
		case "michigantoday":
			console.log("http://michigantoday.umich.edu/a7776/");
			break;
		case "finished_injury":
			console.log("Finished Injury Story");
			break;
		default:
			console.log(item + " not found");

	}
}