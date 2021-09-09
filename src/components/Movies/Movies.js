import React from 'react';
import '../App/App.css';
import '../App/plugins.css';
import Movie from '../Movie/Movie';
import Single from '../detailPage/detailPage';
import SearchBar from '../SearchBar/SearchBar';


class Movies extends React.Component {

 constructor(props){
  super(props);
  this.state={single:false,title:'',overView:'',vote_average:'',release_date:'',img:'',url:'' }

  if(this.state.single!=this.props.resetState){
    this.setState({single:this.props.resetState});
  }
  this.detail=this.detail.bind(this);

 }

 
 detail(newState,title,overView,vote_average,release_date,img,url){
    
    this.setState({single:newState});
    this.setState({title:title});
    this.setState({overView:overView});
    this.setState({vote_average:vote_average});
    this.setState({release_date:release_date});
    this.setState({img:img});
    this.setState({url:url});

    this.props.changeResetState(true);
    

 }

 

 static getDerivedStateFromProps(props, state) {
    return {single: props.resetState };
  }

  
  render() {

    if(this.state.single==false){
    return (


     
  <div className="slider movie-items">
        <div className="container">
          <div className="row">
            <div className="social-link">
              <p>Follow us: </p>
              <a href="#"><i className="ion-social-facebook" /></a>
              <a href="#"><i className="ion-social-twitter" /></a>
              <a href="#"><i className="ion-social-googleplus" /></a>
              <a href="#"><i className="ion-social-youtube" /></a>
            </div>
            <div className="slick-multiItemSlider">

          
           {   
              
                this.props.movies.map((movie,i )=> {
                let genre = this.props.genres[i];
                  
                  if(typeof genre ==='undefined'){

                     genre = {genreName:'NA', id:'NA'};

                  }
                  


                  return  <Movie movie={movie} key={movie.id} url={this.props.urls.base_url} genre={genre} detailPage={this.detail}  />

                  
              })
           }


            </div>
          </div>
        </div>
      </div>

    );
  }
  if(this.state.single==true){


    return (
      <div>
        
        <Single title={this.state.title} overView={this.state.overView} vote_average={this.state.vote_average} release_date={this.state.release_date} url={this.state.url} img={this.state.img} />

      </div>

      );
  }
  }
}

export default Movies;