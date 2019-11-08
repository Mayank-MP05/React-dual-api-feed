import React,{useEffect} from "react";
import axios from 'axios';

import {Link} from 'react-router-dom'

class Stack extends React.Component{

    state = {
      data:null
    }

    constructor(props){
        super(props)
        this.getData();
    }

    getData = () => {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=300')
        .then( resp => {
        console.log(resp.data);
        this.setState({
            data : resp.data
        });
      })
    }

    checkifLoaded = () => {
        let loaded = false;
        if(this.state.data != null){
            loaded = true;
        }else{
            loaded = false;
        }
        return loaded;
    }

    render(){
        return(
            <div>
                <div className='card-deck'>
                    {
                        this.checkifLoaded() ?
                        this.state.data.map(
                            card => (
                                <div className='card' key={card.id} style={{minWidth:250}}>
                                    <Link to={`/${card.id}`} style={{textDecoration:'none'}}>
                                    <img className="card-img-top" src={card.thumbnailUrl} alt={card.title} />
                                    <div className="card-body">
                                        <p className="card-text">{card.title}</p>
                                </div>
                                </Link>
                                </div>
                            )
                        ): <h1>Loading ...</h1>
                    }
                </div>
            </div>
        );
    }
}

export default Stack;