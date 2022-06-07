const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
	try {
		const subject = 'fiction';
		let works = [];
		await axios.get(`https://openlibrary.org/subjects/${subject}.json`)
			.then((response) => {
				// parse the necessary data for each work
				response.data.works.filter((work) => work.availability.isbn)
					.forEach((work) => {
						works.push({ 
							key: work.key,
							title: work.title,
							isbn: work.availability.isbn,
							authors: work.authors,
							cover: `https://covers.openlibrary.org/b/isbn/${work.availability.isbn}-L.jpg`,
						});
					});
			});
		console.log(works);

		// get the description of each work
		// https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
		const bookInfo = [];
		for (const work of works) {
			await axios.get(`https://openlibrary.org/${work.key}`)
				.then((response) => {
					bookInfo.push({
						description: response.data.description,
						numberOfPages: response.data.number_of_pages,
					})
				});
		}
		works = works.map((work, id) => {
			return {
				...work,
				...bookInfo[id],
			}});
		res.status(200).send({works: works});
	} catch (error) {
		console.log(error);
		res.status(500).send({'message': error});
	}
})

module.exports = router;