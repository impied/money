window.Money = window.Money || {};
_.templateSettings = {
    interpolate : /\<\<(.+?)\>\>/g,
    evaluate: /\<\[(.+?)\]\>/g
};
window.Money.templateCache = function(selector) {
	if (!window.Money.JST) {
		window.Money.JST = {};
	}
	var template = window.Ibles.Money[selector];
	if (!template) {
		template = $(selector).html();
		template = _.template(template);
		window.Money.JST[selector] = template;
	}
	return template;
};