import React, {Component} from 'react'
import { Button } from 'antd';


class PictureDetail extends Component{
    render(){
        return (
            <div>
                <img className="img-size" src={this.props.url} key={this.props.key}/>
                <Button type="primary">Like</Button><p id="countlike">0</p>
            </div>
        )
    }
}

export default PictureDetail