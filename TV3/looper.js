$(document).ready(function() {
	var curIdx = 0,
		urls = $.map($('#links a'), function(el) {
			return $(el).attr('href');
		}),
		cache = {};

	function nextPage() {
		var url = urls[curIdx],
			data = cache[url];

		curIdx += 1;
		if (curIdx == urls.length) curIdx = 0;

		if (!data) {
			$('#content').load(url, function(data) {
				cache[url] = data;
				nextTimer();
			});
		} else {
			$('#content').html(data);
			nextTimer();
		}
	}

	function nextTimer() {
		window.setTimeout(function() {
			nextPage();
		}, 3000); // 3 Seconds
	}

	nextPage();
});
