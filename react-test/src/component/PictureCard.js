import React, {Component} from 'react'
import { Row, Col } from 'antd'
import PictureDetail from './PictureDetail'

class PictureCard extends Component{
    render(){
        let pathPhoto = [
                        {id:1, url:'/photos/tent5.jpg'}, 
                        {id:2, url:'/photos/tent8.jpg'},
                        {id:3, url:'/photos/tent9.jpg'},
                        {id:4, url:'/photos/tent112.jpg'},
                        {id:5, url:'/photos/tent115.jpg'}
                    ]
                    
        // const photos = pathPhoto.map(photo =>
        //     <Col span={6}><PictureDetail url={photo.url} key={photo.id}/></Col>
        //   )   
        return (
            <div>
                <Row>
                    {/* {photos} */}
                    {pathPhoto.map(photo =>
                        <Col span={6}><PictureDetail url={photo.url} key={photo.id}/></Col>)}
                </Row>
            </div>
        )
    }
}

export default PictureCard