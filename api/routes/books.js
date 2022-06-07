const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
	const subject = 'love';
	let works = [];
	await axios.get(`https://openlibrary.org/subjects/${subject}.json`)
		.then((response) => {
			// parse the necessary data for each work
			response.data.works.filter((work) => work.availability.isbn !== null)
				.forEach((work) => {
					works.push({ 
						key: work.key,
						title: work.title,
						isbn: work.availability.isbn,
						authors: work.authors,
						cover: `https://covers.openlibrary.org/b/isbn/${work.availability.isbn}-L.jpg`,
					});
				});
		})
		.catch((error) => res.status(500).send({'message': error}));

	// get the description of each work
	// https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
	const descriptions = [];
	for (const work of works) {
		let description;
		await axios.get(`https://openlibrary.org/${work.key}`)
			.then((response) => description = response.data.description)
			.catch((error) => res.status(500).send({'message': error}))
		descriptions.push(description);
	}
	works = works.map((work, id) => {
		return {
			...work,
			description: descriptions[id],
		}});
	res.status(200).send({works: works});
})

module.exports = router;