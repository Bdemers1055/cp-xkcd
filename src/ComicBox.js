import React, { Component } from 'react';
import axios from 'axios';
import './ComicBox.css';

class ComicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        number: 0,
        comic: {},
        success: false,
        error: null,
    };
  }
componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users/1'
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
    const { success, error } = this.state;
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
        <div className="ComicBoxContainer">comics</div>
    )
};
}

export default ComicBox;
