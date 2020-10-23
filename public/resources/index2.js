var addButtonTrigger = function addButtonTrigger(el) {
	el.addEventListener('click', function () {
		var popupEl = document.querySelector('.' + el.dataset.for);
		popupEl.classList.toggle('popup--visible');
	});
};

Array.from(document.querySelectorAll('button[data-for]')).forEach(addButtonTrigger);