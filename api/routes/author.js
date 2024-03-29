const express = require('express');
const router = express.Router();
const axios = require('axios');

let authorName = '';
//gets books by author 
router.post('/', async(req, res, next) => {
    authorName = req.body.author.splice(-1).join(' ');
    console.log(req.body);
    console.log("Author"+" "+authorName);
})

router.get('/',async (req,res,next) => {
    try{
        console.log("Get author Work: "+authorName);
        let works = [];
        await axios.get(`https://openlibrary.org/search.json`, { params: { subject: authorName, limit: 15 }})
        .then((response) => response.data.docs.slice(0, 100).filter((doc) => doc.cover_i).forEach((doc) => {
        works.push({
            key: doc.key,
            title: doc.title,
            authors: doc.author_name,
            isbn: doc.isbn[doc.isbn.length - 1],
            cover: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
        });
    }));

    const bookInfo = [];
    for (const work of works) {
        let desc;
        await axios.get(`https://openlibrary.org${work.key}.json`)
            .then((response) => desc = response.data.description)
        
        await axios.get(`https://openlibrary.org/api/books`, {
            params: {
                bibkeys: `ISBN:${work.isbn}`,
                jscmd: 'data',
                format: 'json'
            }
        })
            .then((response) => {
                if (typeof response === 'undefined' || Object.keys(response.data).length === 0)
                    bookInfo.push({
                        number_of_pages: null,
                        price: 10,
                        desc: desc
                    })
                else {
                    const number_of_pages = response.data[`ISBN:${work.isbn}`].number_of_pages;
                    bookInfo.push({
                        number_of_pages: number_of_pages ? number_of_pages : null,
                        price: number_of_pages ? Number((number_of_pages * 0.9).toFixed(2)) : 10,
                        desc: desc
                    });
                }
            });
    }
    works = works.map((work, id) => {
        return {
            ...work,
            ...bookInfo[id],
        }});
    res.status(200).send({works: works});
    }catch (error){
        console.log(error);
		res.status(500).send({'message': error.toString()});
    }
});  

module.exports = router;
