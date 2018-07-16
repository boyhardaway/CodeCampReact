import React, {Component} from 'react'
import ButtonLike from './ButtonLike'
import TextareaComment from './TextareaComment'
import PictureCard from './PictureCard'
class PhotoPikka extends Component{

    render(){
        return  <div>
                    <div class="columns">
                        <div class="column">
                            {/* <img src="/photos/tent5.jpg" />
                            <p>2018/10/05</p><ButtonLike/>
                            <p>Comment</p><TextareaComment/> */}
                            <PictureCard
                                myId='0001'
                                url='/photos/tent3.jpg'
                                myCreate='Boy'
                                myDate='2018/07/16 13:54'
                                myLikeCount={559}
                                myCommentCount={12} 
                            />
                        </div>
                        <div class="column"> 
                        <PictureCard
                                myId='0002'
                                url='/photos/tent4.jpg'
                                myCreate='Boy'
                                myDate='2018/07/16 13:54'
                                myLikeCount={559}
                                myCommentCount={12} 
                            />
                        </div>
                        <div class="column"> 
                            <PictureCard
                                myId='0003'
                                url='/photos/tent5.jpg'
                                myCreate='Boy'
                                myDate='2018/07/16 13:54'
                                myLikeCount={559}
                                myCommentCount={12} 
                            />
                        </div>
                        <div class="column"> 
                            <PictureCard
                                myId='0004'
                                url='/photos/tent8.jpg'
                                myCreate='Boy'
                                myDate='2018/07/16 13:54'
                                myLikeCount={559}
                                myCommentCount={12} 
                            />
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            {/* <img src="/photos/tent5.jpg" />
                            <p>2018/10/05</p><ButtonLike/>
                            <p>Comment</p><TextareaComment/> */}
                            <PictureCard
                                myId='0001'
                                url='/photos/tent3.jpg'
                                myCreate='Boy'
                                myDate='2018/07/16 13:54'
                                myLikeCount={559}
                                myCommentCount={12} 
                            />
                        </div> 
                        <div class="column"> 
                        </div>
                        <div class="column"> 
                        </div> 
                        <div class="column"> 
                        </div>  
                    </div>
                </div> 
    }
}

export default PhotoPikka