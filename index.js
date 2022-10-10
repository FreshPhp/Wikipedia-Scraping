const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://pt.wikipedia.org/wiki/Oscar_de_melhor_filme";



async function getMovie() {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
 //   console.log($)
 list_movies = []
 $('.wikitable tbody tr').each((i, element) => {
 name_movie = $(element).find('td[style*="background:#FAEB86"]').last().text().replace("\n", "");
  if(name_movie !== ""){
    year = $(element).find('td[style*="background:#FAEB86"]').first().prev("td").text().replace("\n", "").slice(-5).trim();
    edit = $(element).find('td[style*="background:#FAEB86"]').first().prev("td").text().replace("\n", "");
    var index = edit.indexOf(',')
    editon_oscar = edit.substring(0, index)
   // edition = $(element).find('td[style*="background:#FAEB86"]').first().prev("td").text().replace("\n", "");
  movies = {
name_movie,
year,
editon_oscar
}
  list_movies.push(movies)

  }
 });

 console.log(list_movies)
}

getMovie()

