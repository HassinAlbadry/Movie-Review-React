const apiKey='b471a92450c0036afeeae0ab1558d648';
const Genre = {

  search() {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/genre/movie/list??api_key=${apiKey}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.results) {
        return jsonResponse.results.map(result => ({
          
         
        }));
      }
    });
  }
};

export default Genre;
