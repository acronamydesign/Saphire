//counting down	
wordCount = {
	init: function () {
		el = {
			target: $(".textarea-count"),
			indic: $(".count-ind"),
		}
		state = {
			one: "warning",
			two: "danger",
		}
		style = {
			bold: "b",
		}
		el.target.each(function () {
			$(this).keyup(function () {
				var max = $(this).attr("maxlength");
				var down = max - $(this).val().length;

				var nextCountEl = $(this).next().find(el.indic);
				nextCountEl.text(down).attr("value", down);
				if (down <= 10) {
					$(this).next().find(el.indic).addClass(state.one).addClass(style.bold);
				} else {
					$(this).next().find(el.indic).removeClass(state.one).removeClass(style.bold);
				}
				if (down <= 0) {
					$(this).next().find(el.indic).addClass(state.two);
				} else {
					$(this).next().find(el.indic).removeClass(state.two);
				}
			});
		});
	}
}
$(wordCount.init);