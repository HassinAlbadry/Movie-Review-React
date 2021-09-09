import React from 'react';
import '../App/App.css';
import '../App/plugins.css';
import Single from '../detailPage/detailPage';

class Movie extends React.Component {

constructor(props){
super(props)
this.state={showDetail:true,title:this.props.movie.title,overView:this.props.movie.overView,vote_average:this.props.movie.vote_average,release_date:this.props.movie.release_date,img:this.props.movie.img,url:this.props.url}

this.handleClick=this.handleClick.bind(this);
}

handleClick(){
 
 this.props.detailPage(this.state.showDetail,this.state.title,this.state.overView,this.state.vote_average,this.state.release_date,this.state.img,this.state.url);
 

}


  render() {
    return (


 <div className="movie-item">

                <div className="mv-img">
                <img src={this.props.url+'w300'+this.props.movie.img} width={150} height={100} />
                  
                </div>
                <div className="title-in">
                  <div className="cate">
                    <span className="blue"><a href="#">{this.props.genre.genreName}</a></span>
                  </div>
                  <h6><a  onClick={this.handleClick}>{this.props.movie.title}</a></h6>
                   
                  <p><i className="ion-android-star" /><span>{this.props.movie.vote_average}</span> /10</p>
                </div>
</div>



     
 


    );
  }
}

export default Movie;