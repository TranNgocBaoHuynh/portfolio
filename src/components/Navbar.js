import React,  {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

/*import {Button} from './Button';*/

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /*chỉnh độ lớn nhỏ của nút khi thu phóng trang web*/
    const showButton = () => {
        if(window.innerWidth <= 960) {setButton(false);}
        else {setButton(true);}
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <> 
            <nav className='navbar'>
                <div className="navbar-container">
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cv' className='nav-links' onClick={closeMobileMenu}>
                                CV
                            </Link>
                        </li>
                    </ul>

                    <Link to='/portfolio' className='navbar-logo' onClick={closeMobileMenu}>
                        TH 
                    </Link> 
                    {button}
                </div>
            </nav> 

        </>
    )
}

export default Navbar
