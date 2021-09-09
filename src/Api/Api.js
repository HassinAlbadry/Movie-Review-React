const apiKey='';
const Api = {

  config(){

 return fetch(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/configuration?api_key=${apiKey}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.images) {
        


         return jsonResponse.images; 
       
      }
    });





  },



genre(){

 return fetch(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.genres) {
         return jsonResponse.genres.map(genre => ({
          
         id:genre.id, 
         genreName: genre.name

        }));
       
      }
    });





  },






  search(query) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.results) {
        return jsonResponse.results.map(result => ({
          
          id:result.id,
          title: result.title,
          img: result.poster_path,
          vote_average: result.vote_average,
          overView:result.overview,
          release_date:result.release_date
        }));
      }
    });
  }
};

export default Api;
