import React, { Component } from 'react';
import axios from 'axios';
import './ComicBox.css';

class ComicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      comic: {},
      success: false,
      error: null,
    };
  }
componentDidMount(){
    const { number } = this.state;
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
        <h1>
            {comic.safe_title}
        </h1>
        <img src={comic.img} alt={comic.alt} />
        </div>
    )
};
}

export default ComicBox;
