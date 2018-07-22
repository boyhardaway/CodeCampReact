import React, {Component} from 'react'
import ButtonLike from './ButtonLike'
import TextareaComment from './TextareaComment'
import PictureCard from './PictureCard'
class PhotoPikka extends Component{
    state={
        photos : [],
        isLoading: true
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://guver.net/api/v1/pikka')
            const { list } = await response.json()
            this.setState({ photos: list})
            console.log(list)
          } catch (err) {
            alert(err.message)
          } finally {
            setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
            
          }
        
      }
    render(){
        const { isLoading } = this.state
        if (isLoading) return <div class="loader"></div>
        return  (
            <div> 
                <div class="columns">
                { 
                    this.state.photos.map((val) => 
                    <div class="column is-one-quarter">
                        <PictureCard
                            myId={val.id}
                            url={val.picture}
                            myCreate={val.createdBy}
                            myDate={val.createdAt}
                            myLikeCount={999}
                            myCommentCount={99} 
                        />
                    </div>
                    ) 
                }
                </div>
            </div>
        )
    }
}
export default PhotoPikka
 