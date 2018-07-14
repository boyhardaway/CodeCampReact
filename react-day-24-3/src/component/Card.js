import React, {Component} from 'react'

class Card extends Component{
    showAlert = (name) => {
        alert('hello ' + name)
    }
    render(){
        return (
            <div>
                <img src={`/photo/${this.props.photo}.jpg`} onClick={(e) => this.showAlert(this.props.photo)}/>
            </div>
        )
    }
    
}

export default Card


{/* <div>
    <div className="columns">
        <div className="columns">
            <img src={`/photo/${this.props.photos[0]}.jpg`} />
            <img src={`/photo/${this.props.photos[1]}.jpg`} />
            <img src={`/photo/${this.props.photos[2]}.jpg`} />
            <img src={`/photo/${this.props.photos[3]}.jpg`} />
        </div>
    </div> 
    <div className="columns">
        <div className="columns">
            <img src={`/photo/${this.props.photos[4]}.jpg`} />
            <img src={`/photo/${this.props.photos[5]}.jpg`} />
            <img src={`/photo/${this.props.photos[6]}.jpg`} />
            <img src={`/photo/${this.props.photos[7]}.jpg`} />
        </div>
    </div> 
</div> */}