function updatePage(event) {
	element = event.target;
	if(element.nextElementSibling != null) {
		opacity = element.nextElementSibling.style.opacity;
		element.nextElementSibling.style.opacity = .1;
		setTimeout(function() { element.nextElementSibling.style.opacity = opacity; }, 250); 
	} else if(element.parentElement.nextElementSibling != null) {
		opacity = element.parentElement.nextElementSibling.style.opacity;
		element.parentElement.nextElementSibling.style.opacity = .1;
		setTimeout(function() { element.parentElement.nextElementSibling.style.opacity = opacity; }, 250); 
	} else if(element.parentElement.parentElement.nextElementSibling != null) {
		opacity = element.parentElement.parentElement.nextElementSibling.style.opacity;
		element.parentElement.parentElement.nextElementSibling.style.opacity = .1;
		setTimeout(function() { element.parentElement.parentElement.nextElementSibling.style.opacity = opacity; }, 250); 
	} else {
		element = document.getElementById("start");
		console.log(element);
		opacity = element.style.opacity;
		element.style.opacity = .1;
		setTimeout(function() { element.style.opacity = opacity; }, 250); 
	}
}