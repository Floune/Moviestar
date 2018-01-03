const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const request = require('request');
const cheerio = require('cheerio');

app.get('/api/scrap', function(req, res) {
	url = 'https://reelgood.com/movies/genre/comedy';
	request(url, function(error, response, html) {
		if (!error) {
			let $ = cheerio.load(html);
			let title;
			let json = {titles: []};
			let lon;
			$('.a-').filter(function() {
				let data = $(this);
				data.children().each(function(i){
					if ($(this).text() !== '')
						json.titles.push($(this).text());
				})
			})
			res.send({json: json});
		}
	})
})

app.listen(port, () => console.log(`listening on port ${port}`));