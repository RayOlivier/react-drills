import React, {Component} from 'react';

class Image extends Component{


    render(){


        return(
            <div>
                <h2>Image Component</h2>
                <img src={this.props.link} alt="ayyyyy"></img>
            </div>
        )
    }
}

export default Image;