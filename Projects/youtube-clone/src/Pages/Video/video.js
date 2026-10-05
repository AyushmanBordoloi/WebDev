import React from 'react'
import './video.css'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';



const Video = () => {
    return (
        <div className='video'>
            <div className="videoPostSection">
                <div className="video_youtube">
                    <video width="400" controls autoPlay muted className='video_youtubeVideo'>
                        <source src={'https://lorem.video/720p'} type="video/mp4"/>
                        <source src={'https://lorem.video/720p'} type="video/webm"/>
                        your browser doesnot support this video
                    </video>
                </div>
                <div className="video_youtubeAbout">
                    <div className="video_youtubeTitle">
                        {"Lorem video available for real??"}
                    </div>
                    <div className="video_youtubeProfileBlock">
                        <div className="video_youtubeProfileBlockLeft">
                            <div className="video_youtubeProfileBlockLeft_img">
                                <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="video_youtubeProfileBlockLeft_imgPic" />
                            </div>
                            <div className="video_youtubeProfileBlockLeft_userInfo">
                                <div className="video_youtubeProfileBlockLeft_userName">{"User 1"}</div>
                                <div className="video_youtubeProfileBlockLeft_userSubscribers">{"1.6M subscribers"}</div>
                            </div>
                            <div className="video_youtubeJoinButton">Join</div>
                            <div className="video_youtubeSubscribeButton">Subscribe</div>
                        </div>
                        <div className="video_youtubeProfileBlockRight">
                            <div className="video_youtubeLikeDislikeButton">
                                <div className="video_youtubeLikeButton">
                                    <ThumbUpOffAltOutlinedIcon/>
                                    <div className="video_youtubeLikeCount">
                                        {"16K"}
                                    </div>
                                </div>
                                <div className="video_youtubeLikeDislikeDivider"></div>
                                <div className="video_youtubeDislikeButton">
                                    <ThumbDownOffAltOutlinedIcon/>
                                </div>
                            </div>
                            <div className="video_youtubeShareButton">
                                <ShareOutlinedIcon/>
                                Share
                            </div>
                            <div className="video_youtubeAskButton">
                                <AutoAwesomeRoundedIcon/>
                                Ask
                            </div>
                            <div className="video_youtubeSaveButton">
                                <BookmarkBorderOutlinedIcon/>
                                Save
                            </div>
                            <div className="video_youtubeMoreButton">
                                <MoreHorizRoundedIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video_youtubeDescription">
                    <div className="video_youtubeViewsAndDate">
                        <div className="video_youtubeViews">2.2m views</div>
                        <div className="video_youtubeUploadDate">3 weeks ago</div>
                    </div>
                    <div className="video_youtubeDescriptionText">This is a demo video called the lorem video just like the lorem text that is used as a filler text in any website that is under construction</div>
                </div>
                <div className="video_youtubeComments">
                    <div className="video_youtubeCommentsCount">16 Comments</div>
                    <div className="video_youtubeSelfComment">
                        <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="" className="video_youtubeSelfCommentProfilePic" />
                        <div className="addAComment">
                            <input type="text" placeholder='Add a comment...' className="addACommentInput" />
                            <div className='selfCommentFooter'>
                                <div className="selfCommentReaction">
                                    <AddReactionRoundedIcon/>
                                </div>
                                <div className="cancelSubmitComment">
                                    <div className="cancelComment">Cancel</div>
                                    <div className="submitComment">Submit</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="video_youtubeOthersComment">
                        <div className="othersCommentSection">
                            <img src="https://cdn.pixabay.com/photo/2025/11/23/13/40/bird-9972448_1280.jpg" alt="" className="video_youtubeOthersCommentProfilePic" />
                            <div className="othersComments">
                                <div className="othersCommentSectionHeader">
                                    <div className="othersCommentSectionHeader_userName">@ayushman</div>
                                    <div className="othersCommentSectionHeader_time">1 year ago</div>
                                </div>
                                <div className="othersCommentSectionComment">
                                    This is a cool lorem video
                                </div>
                            </div>
                        </div>

                        <div className="othersCommentSection">
                            <img src="https://cdn.pixabay.com/photo/2025/11/23/13/40/bird-9972448_1280.jpg" alt="" className="video_youtubeOthersCommentProfilePic" />
                            <div className="othersComments">
                                <div className="othersCommentSectionHeader">
                                    <div className="othersCommentSectionHeader_userName">@bordoloi_16</div>
                                    <div className="othersCommentSectionHeader_time">2 years ago</div>
                                </div>
                                <div className="othersCommentSectionComment">
                                    Awsome...
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="videoSuggestions">
                <div className="videoSuggestionsBlock">
                    <div className="videoSuggestionsBlock_thumbnail">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="" className="videoSuggestionsBlock_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>
                    <div className="videoSuggestionsBlock_description">
                        <div className="videoSuggestionsBlock_descriptionTitle">A journey from Mumbai to Mahabaleshwar </div>
                        <div className="videoSuggestionsBlock_descriptionProfile">Ayushman Bordoloi</div>
                        <div className="videoSuggestionsBlock_descriptionViewsAndTime">
                            <div className="videoSuggestionsBlock_descriptionViews">30k</div>
                            <div className="videoSuggestionsBlock_descriptionTime">1 year ago</div>
                        </div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="videoSuggestionsBlock_thumbnail">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="" className="videoSuggestionsBlock_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>
                    <div className="videoSuggestionsBlock_description">
                        <div className="videoSuggestionsBlock_descriptionTitle">A journey from Mumbai to Mahabaleshwar </div>
                        <div className="videoSuggestionsBlock_descriptionProfile">Ayushman Bordoloi</div>
                        <div className="videoSuggestionsBlock_descriptionViewsAndTime">
                            <div className="videoSuggestionsBlock_descriptionViews">30k</div>
                            <div className="videoSuggestionsBlock_descriptionTime">1 year ago</div>
                        </div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="videoSuggestionsBlock_thumbnail">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="" className="videoSuggestionsBlock_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>
                    <div className="videoSuggestionsBlock_description">
                        <div className="videoSuggestionsBlock_descriptionTitle">A journey from Mumbai to Mahabaleshwar </div>
                        <div className="videoSuggestionsBlock_descriptionProfile">Ayushman Bordoloi</div>
                        <div className="videoSuggestionsBlock_descriptionViewsAndTime">
                            <div className="videoSuggestionsBlock_descriptionViews">30k</div>
                            <div className="videoSuggestionsBlock_descriptionTime">1 year ago</div>
                        </div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="videoSuggestionsBlock_thumbnail">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="" className="videoSuggestionsBlock_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>
                    <div className="videoSuggestionsBlock_description">
                        <div className="videoSuggestionsBlock_descriptionTitle">A journey from Mumbai to Mahabaleshwar </div>
                        <div className="videoSuggestionsBlock_descriptionProfile">Ayushman Bordoloi</div>
                        <div className="videoSuggestionsBlock_descriptionViewsAndTime">
                            <div className="videoSuggestionsBlock_descriptionViews">30k</div>
                            <div className="videoSuggestionsBlock_descriptionTime">1 year ago</div>
                        </div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="videoSuggestionsBlock_thumbnail">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="" className="videoSuggestionsBlock_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>
                    <div className="videoSuggestionsBlock_description">
                        <div className="videoSuggestionsBlock_descriptionTitle">A journey from Mumbai to Mahabaleshwar </div>
                        <div className="videoSuggestionsBlock_descriptionProfile">Ayushman Bordoloi</div>
                        <div className="videoSuggestionsBlock_descriptionViewsAndTime">
                            <div className="videoSuggestionsBlock_descriptionViews">30k</div>
                            <div className="videoSuggestionsBlock_descriptionTime">1 year ago</div>
                        </div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="videoSuggestionsBlock_thumbnail">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="" className="videoSuggestionsBlock_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>
                    <div className="videoSuggestionsBlock_description">
                        <div className="videoSuggestionsBlock_descriptionTitle">A journey from Mumbai to Mahabaleshwar </div>
                        <div className="videoSuggestionsBlock_descriptionProfile">Ayushman Bordoloi</div>
                        <div className="videoSuggestionsBlock_descriptionViewsAndTime">
                            <div className="videoSuggestionsBlock_descriptionViews">30k</div>
                            <div className="videoSuggestionsBlock_descriptionTime">1 year ago</div>
                        </div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="videoSuggestionsBlock_thumbnail">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="" className="videoSuggestionsBlock_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>
                    <div className="videoSuggestionsBlock_description">
                        <div className="videoSuggestionsBlock_descriptionTitle">A journey from Mumbai to Mahabaleshwar </div>
                        <div className="videoSuggestionsBlock_descriptionProfile">Ayushman Bordoloi</div>
                        <div className="videoSuggestionsBlock_descriptionViewsAndTime">
                            <div className="videoSuggestionsBlock_descriptionViews">30k</div>
                            <div className="videoSuggestionsBlock_descriptionTime">1 year ago</div>
                        </div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="videoSuggestionsBlock_thumbnail">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="" className="videoSuggestionsBlock_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>
                    <div className="videoSuggestionsBlock_description">
                        <div className="videoSuggestionsBlock_descriptionTitle">A journey from Mumbai to Mahabaleshwar </div>
                        <div className="videoSuggestionsBlock_descriptionProfile">Ayushman Bordoloi</div>
                        <div className="videoSuggestionsBlock_descriptionViewsAndTime">
                            <div className="videoSuggestionsBlock_descriptionViews">30k</div>
                            <div className="videoSuggestionsBlock_descriptionTime">1 year ago</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Video
