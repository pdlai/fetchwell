import React from 'react';
import { IoStorefrontOutline } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <ul className='contact-list'>
                    <div className='store'>
                        < IoStorefrontOutline />
                        <div>Find a store</div>
                    </div>
                    <div className='twitter'>
                        < FaTwitter />
                        <div>@askfetchwell</div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Footer;