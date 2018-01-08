const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const request = require('request');
const cheerio = require('cheerio');

//Route appelée avant le montage du composant Game
//Va chercher les films sur reelgood

app.get('/api/infos/:film', function(req, res) {
	let film = req.params.film;
	let url = 'https://reelgood.com/movie/' + film;
	request(url, function(error, response, html) {
		if (!error) {
			let $ = cheerio.load(html);
			let tmp_json = {};
			let div_g = $('body').children().first().children('div').first().children().first().children().eq(4);
			let title = div_g.children().eq(1).children('h1').text();
			let rating = div_g.children().eq(1).children('div').first().children().eq(1).children().first().text();
			let resume = div_g.children().eq(1).children('div').first().children().eq(2).text();
			tmp_json.title = title;
			tmp_json.rating = rating;
			tmp_json.resume = resume;
			res.send({films: tmp_json});
		}
	})
})

app.get('/api/scrap/:genre', function(req, res) {
		let genre = req.params.genre;
		let url = 'https://reelgood.com/movies/genre/' + genre;
		request(url, function(error, response, html) {
			if (!error) {
				let $ = cheerio.load(html);
				let tab_json = [{}];
				let tmp_json = {};
				let div_all = $('body').find('div').children('div').first().children().eq(5).children().first().children().first();
				console.log(div_all.attr());
				//div_all est la div qui change de nom contenant tous les noms et affiches de films
				//On boucle dessus et on remplit esponse
				div_all.filter(function() {
					let data = $(this);
					data.children().each(function(i){
						//condition pour ne pas prendre les entrée vides
						if ($(this).text() !== '')
						{
							tmp_json.id = i;
							tmp_json.url = $(this).find('picture').first().find('source').first().attr('srcset');
							tmp_json.title = $(this).text();
							tab_json.push({title: tmp_json.title, id: i, url: tmp_json.url});
							i++;
						}
					})
				})
			res.send({films: tab_json});
			}
		})
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://netflex.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// décommenter pour servir le dossier build
if (process.env.NODE_ENV === 'production') {
app.use('/', express.static(`${__dirname}/client/build`));
}
// Commenter pour servir le dossier build
app.listen(port, () => console.log(`listening on port ${port}`));