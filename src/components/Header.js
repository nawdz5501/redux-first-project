import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
function Header() {
    return (
        
            <nav>
                <div className='logo'>Thập cẩm shop</div>
                <ul className='nav__links'>
                    
                        <Link to='/' className='link'>
                            Home
                        </Link> 
                    
                        <Link to='/products' className='link'>
                            Products
                        </Link>
                    
                        <Link to='/news' className='link'>
                            News
                        </Link>
                    
                        <Link to='/about' className='link'>
                            About
                        </Link>
                   
                        <Link to='/contact' className='link'>
                            Contact
                        </Link>
                    
                </ul>
            </nav>
        
    )
}

export default Header
