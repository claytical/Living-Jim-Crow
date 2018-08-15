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
	var html = "<div class='item'><h3>";
	switch(item) {
		case "nih1":
			html +="NIH Article"
			html += "<span class='new-label'>New!</span></h3><p>";
			html +="Article discussing health disparities amongst different races</p>";
			html +="<a href='#'>View</a>";
			break;
		case "nejm1":
			html +="NEJM Article"
			html += "<span class='new-label'>New!</span></h3><p>";
			html +="Article discussing health disparities amongst different races</p>";
			html +="<a href='#'>View</a>";
			break;
		case "newyorker1":
			html +="New Yorker Article"
			html += "<span class='new-label'>New!</span></h3><p>";
			html +="Article discussing health disparities amongst different races</p>";
			html +="<a href='https://www.newyorker.com/magazine/2018/02/05/what-does-it-mean-to-die'>View</a>";
			break;
		case "michigantoday":
			html +="Michigan Today Article"
			html += "<span class='new-label'>New!</span></h3><p>";
			html +="Article discussing health disparities amongst different races</p>";
			html +="<a href='http://michigantoday.umich.edu/a7776/'>View</a>";
			break;
		case "finished_injury":
			html +="Injury Story Complete"
			html += "<span class='new-label'>New!</span></h3><p>";
			html +="You played through the story <em>An Injury</em>";
			break;
		default:
			console.log(item + " not found");

	}
	html += "</p></div>";
	var new_item = $(".vault-content").prepend(html);
	if(!vaultOpen) {
		openVault();
	}
	new_item.children(".item .new-label").hide(0).show(5000).delay(5000).fadeOut('slow');

}