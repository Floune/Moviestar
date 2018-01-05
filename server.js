const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const request = require('request');
const cheerio = require('cheerio');

//Route appelée avant le montage du composant Game
//Va chercher les films sur reelgood
app.get('/api/scrap', function(req, res) {
	url = 'https://reelgood.com/movies/genre/action';
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
					}
				})
			})
			res.send({films: tab_json});
		}
	})
})

//La ligne proxy dans le package.json de l'appli react la fait communiquer avec le serveur
app.listen(port, () => console.log(`listening on port ${port}`));