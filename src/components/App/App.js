import React from 'react';
import logo from './logo.svg';
import './App.css';
import './plugins.css';
import SearchBar from '../SearchBar/SearchBar';
import Movies from '../Movies/Movies';
import Api from '../../Api/Api';

class App extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      url:[],
      movies: [],
      genres:[],
      resetMoviesState:false
    };

    this.searchMovies= this.searchMovies.bind(this);
    this.reset=this.reset.bind(this);
    this.changeResetState=this.changeResetState.bind(this);

  }

  searchMovies(query) {
    Api.search(query).then(movies => {
      this.setState({movies:movies});
      
    });

     Api.config().then(url => {
      this.setState({url:url});
    });


      Api.genre().then(genres => {
      this.setState({genres:genres});
    });

  }

  
  reset(reset){

    this.setState({resetMoviesState:reset});
  }

  changeResetState(){

    this.setState({resetMoviesState:true});
  }

  
  render() {
    return (

      <div>

       <SearchBar  searchMovies={this.searchMovies} resetState={this.reset} />
       <Movies movies={this.state.movies} urls={this.state.url} genres={this.state.genres} resetState={this.state.resetMoviesState} changeResetState={this.changeResetState}   />
                      
       
      </div>
    );
  }
}

export default App;