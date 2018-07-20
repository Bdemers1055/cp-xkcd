import React, { Component } from 'react';
import axios from 'axios';
import './ComicBox.css';

function randomNumber(lower, upper) {
    const min = Math.ceil(lower);
    const max = Math.floor(upper);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class ComicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comic: {},
      success: false,
      error: null,
    };
  }
  componentDidMount(){
    this.fetchRandomComic();
  }

  fetchRandomComic(){
    const number = randomNumber(1, 2000);
    const url = `http://localhost:7042/comic/${number}`;
    axios.get(url).then((response) => {
        this.setState({
            comic: response.data,
            success: true,
        });
    }).catch((error) => {
        this.setState({
            success: false,
            error,
        });
  });
  }
render(){
    const { success, error, comic } = this.state;
    if(error) {
        return(
            <p>oops,try again</p>
        );
    }
    if (!success){
        return(
        <div>loading...</div>
        );
    }
    return(
        <div className="ComicBoxContainer">
        <h1 className="ComicBoxTitle">
            {comic.safe_title}
        </h1>
        <button type="button" onClick={this.fetchRandomComic.bind(this)} className="ComicBoxButton">Random</button>
        <img src={comic.img} alt={comic.alt} className="ComicBoxImage" />
        </div>
    )
};
}

export default ComicBox;
