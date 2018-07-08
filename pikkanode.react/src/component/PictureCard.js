import React, {Component} from 'react'

class PictureCard extends Component{
    render(){
        return (
            <div>
                <p>Id : {this.props.myId}</p>
                <img src={this.props.url} />
                <p>CreateBy {this.props.myCreate}</p>
                <p>Date {this.props.myDate}</p>
                <p>Like {this.props.myLikeCount}</p> 
                <p>Comment {this.props.myCommentCount}</p>  
            </div>
        )
    }
}

export default PictureCard