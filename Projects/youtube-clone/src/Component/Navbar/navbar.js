import React, {useState} from 'react'
import './navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavbar from '../SideNavbar/sideNavbar';

const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
    const [userPic, setUserPic] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const [navbarModal, setNavbarModal] = useState(false);

    const handleClickModal = ()=>{
        setNavbarModal(prev=>!prev);
    }
    const sideNavbarFunc = () =>{
        setSideNavbarFunc(!sideNavbar)
    }

    return (
    <div className='navbar'>
        <div className='navbar__left'>
            <div className='navbar__hamburger' onClick={sideNavbarFunc}>
                <MenuRoundedIcon sx={{ color: 'white' }} />
            </div>
            <Link to={'/'} className='navbar__logo'>
                <img 
                    className='navbar__logo-img'
                    src='https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/YouTube_2024_%28white_text%29.svg/500px-YouTube_2024_%28white_text%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail' 
                    alt='YouTube Logo' />
            </Link>
        </div>
        <div className='navbar__middle'>
            <div className="navbar__searchBox">
                <input className='navbar__searchBoxInput' type="text" placeholder='Search'/>
                <div className="navbar__searchIconBox">
                    <SearchOutlinedIcon sx={{ color : 'white', fontSize : '28px'}}/>
                </div>
            </div>
            <div className="navbar__mic">
                <MicOutlinedIcon sx={{color: 'white'}}/>
            </div>
        </div>
        <div className="navbar__right">
            <div className="navbar__create">
                <AddIcon sx={{color: 'white'}}/>
                Create
            </div>
            <div className='navbar__alerts'>
                <NotificationsNoneRoundedIcon sx={{color: 'white',fontSize: '28px'}}/>
            </div>
            <div className="navbar__profile">
                <img onClick={handleClickModal} src={userPic} className='navbar__profilePic' alt="Profile" />
            </div>

            {navbarModal &&
                <div className="navbar__modal">
                    <div className="navbar__modalOption">Profile</div>
                    <div className="navbar__modalOption">Login</div>
                    <div className="navbar__modalOption">Logout</div>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar