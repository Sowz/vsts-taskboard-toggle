var userName = "Hadrien DIOT";

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		
		
		var HubHeader = document.querySelectorAll('[class="vss-HubHeader"]');
		
		
		if(HubHeader.length > 0) {
			clearInterval(readyStateCheckInterval);
			console.log("HubHeader found");
			
			userName = document.querySelectorAll('[class="vss-Persona small"]')[0].attributes["aria-label"].value;
						
			document.querySelectorAll('[id="expand-collapse-button"]')[0].click();
			
			var p = document.createElement('p');
			p.innerHTML = '<a href="#">Toggle</a>';
			p.className = "button special-plugin-button";
			p.dataset.name = "Toggle";
			p.querySelector('a').addEventListener('click',clickHandler,true);
	
			document.querySelectorAll('[class="vss-HubHeader"]')[0].insertAdjacentElement('beforeend', p);
		}
	}
}, 10);

var clickHandler = function(e){
	var expandBtn = document.querySelectorAll('[id="expand-collapse-button"]')[0];
	
	if(expandBtn.attributes["aria-label"].value === "Collapse all") {
		expandBtn.click();
	}
	
	var identitypickers = document.querySelectorAll('[class="identity-picker-resolved-name"]');
	for (var i = 0; i < identitypickers.length; i++) {
		if(identitypickers[i].innerText === userName ) {
			identitypickers[i].click();
		}
	}
}