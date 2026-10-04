import React from 'react'
import './homePage.css'

const HomePage = ({sideNavbar}) => {

    const options = ['All', 'Music', 'Sports', 'Gaming', 'News', 'Movies', 'Fashion', 'Learning', 'Live','All', 'Music', 'Sports', 'Gaming', 'News', 'Movies', 'Fashion', 'Learning', 'Live',]

    return (
        <div className={sideNavbar?'homePage':'fullHomePage'}>
            <div className="homePage_options">
                {
                    options.map((item, index) => {
                        return (
                            <div key={index} className="homePage_option">
                                {item}
                            </div>
                        );
                    })
                }
            </div>

            <div className={sideNavbar?"homePage_main":"fullHomePage_main"}>
                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>

                <div className="youtube_video">

                    <div className="youtube_thumbnailBox">
                        <img src="https://img.youtube.com/vi/jiLQgDrydRo/maxresdefault.jpg" alt="Thumbnail" className="youtube_thumbnailPic" />
                        <div className="youtube_thumbnailTiming">
                            28:00
                        </div>
                    </div>

                    <div className="youtube_titleBox">
                        <div className="youtube_titleBox_profile">
                            <img src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="ProfilePicture" className="youtube_titleBox_profilePic" />
                        </div>

                        <div className="youtube_titleBox_title">
                            <div className="youtube_titleBox_videoTitle">Mumbai to Mahabaleshwar</div>
                            <div className="youtube_titleBox_channelName">Bordoloi</div>
                            <div className="youtube_titleBox_viewCount">16 views</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
