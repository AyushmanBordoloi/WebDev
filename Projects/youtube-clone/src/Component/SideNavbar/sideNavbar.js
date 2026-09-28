import React from 'react'
import './sideNavbar.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const SideNavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar?"home__sideNavbar":"home__sideNavbarHide"}>
        <div className="home__sideNavbarTop">
            <div className={`home__sideNavbarTopOption`}>
                <HomeRoundedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Home</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <OndemandVideoIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Shorts</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <SubscriptionsIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Subscriptions</div>
            </div>
        </div>

        <div className="home__sideNavbarMiddle">
            <div className={`home__sideNavbarTopOption`}>
                <div className='home__sideNavbarTopOptionTitleHeader'>You</div>
                <KeyboardArrowRightRoundedIcon/>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <AccountBoxOutlinedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Your channel</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <HistoryRoundedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>History</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <PlaylistPlayRoundedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Playlists</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <AccessTimeRoundedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Watch later</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <ThumbUpOffAltOutlinedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Liked videos</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <SmartDisplayOutlinedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Your videos</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <FileDownloadOutlinedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Downloads</div>
            </div>
            <div className={`home__sideNavbarTopOption`}>
                <KeyboardArrowDownRoundedIcon/>
                <div className='home__sideNavbarTopOptionTitle'>Show more</div>
            </div>
        </div>

        <div className="home__sideNavbarMiddle">
            <div className="home__sideNavbarTopOption">
                <div className="home__sideNavbarTopOptionTitleHeader">Subscriptions</div>
                <KeyboardArrowRightRoundedIcon/>
            </div>
            <div className="home__sideNavbarTopOption">
                <img className='home__sideNavbarImgLogo' src="https://cdn.pixabay.com/photo/2014/05/19/22/20/dog-348572_1280.jpg" alt="Profile Picture" />
                <div className="home__sideNavbarTopOptionTitle">Ayushman</div>
            </div>
            <div className="home__sideNavbarTopOption">
                <img className='home__sideNavbarImgLogo' src="https://cdn.pixabay.com/photo/2026/02/22/12/04/andsproject-girl-10137698_1280.png" alt="Profile Picture" />
                <div className="home__sideNavbarTopOptionTitle">Bordoloi</div>
            </div>
            <div className="home__sideNavbarTopOption">
                <img className='home__sideNavbarImgLogo' src="https://cdn.pixabay.com/photo/2025/11/23/13/40/bird-9972448_1280.jpg" alt="Profile Picture" />
                <div className="home__sideNavbarTopOptionTitle">Ayush Bordoloi</div>
            </div>
            <div className="home__sideNavbarTopOption">
                <img className='home__sideNavbarImgLogo' src="https://cdn.pixabay.com/photo/2018/01/01/18/30/horse-3054683_1280.jpg" alt="Profile Picture" />
                <div className="home__sideNavbarTopOptionTitle">Mr Bordoloi</div>
            </div>
            <div className="home__sideNavbarTopOption">
                <img className='home__sideNavbarImgLogo' src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" alt="Profile Picture" />
                <div className="home__sideNavbarTopOptionTitle">Mr Ayushman</div>
            </div>
        </div>
    </div>
  )
}

export default SideNavbar
