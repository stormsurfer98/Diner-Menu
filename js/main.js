function updatePage(event) {
	element = event.target;
	if(element.nextElementSibling != null) {
		opacity = element.nextElementSibling.style.opacity;
		element.nextElementSibling.style.opacity = .1;
		setTimeout(function() { element.nextElementSibling.style.opacity = opacity; }, 250); 
	} else {
		opacity = element.parentElement.nextElementSibling.style.opacity;
		element.parentElement.nextElementSibling.style.opacity = .1;
		setTimeout(function() { element.parentElement.nextElementSibling.style.opacity = opacity; }, 250); 
	}
}