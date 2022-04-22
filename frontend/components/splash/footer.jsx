import React from 'react';
import { IoStorefrontOutline } from 'react-icons/io5';
import { FaTwitter, FaAngellist } from 'react-icons/fa';
import { IoIosPhonePortrait } from 'react-icons/io';
import { GoMail } from 'react-icons/go';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>

                <div className='contact-list'>
                    <div className='store'>
                        < IoStorefrontOutline size='42px' />
                        <div>Find&nbsp;a&nbsp;store</div>
                    </div>
                    <div className='twitter'>
                        < FaTwitter size='42px' />
                        <div>@askfetchwell</div>
                    </div>
                    <div className='phone'>
                        < IoIosPhonePortrait size='42px' />
                        <div>123&nbsp;456&nbsp;7890</div>
                    </div>
                    <div className='mail'>
                        < GoMail size='42px' />
                        <div>phillyp.lai@gmail.com</div>
                    </div>
                    <div className='chat'>
                        < IoChatboxEllipsesOutline size='42px' />
                        <div>Live&nbsp;Chat</div>
                    </div>
                </div>

                <div className='sub-contact-list'>
                    <div className='subscribe-email'>
                        <div className='subscribe-phrase'>
                            <div>We take email-making very
                            seriously. Sign up to get in</div>
                            <div>on it.</div>
                        </div>
                        <div className='subscribe-gender'>
                            <label>
                                <input type='radio' name='gender'/>
                                Women's
                            </label>
                            <label>
                                <input type='radio' name='gender'/>
                                Men's
                            </label>
                            <label>
                                <input type='radio' name='gender' defaultChecked/>
                                Both
                            </label>
                        </div>
                        <div className='subscribe-email-form'>
                            <input type='text' placeholder='Your email, please'/>
                            < FiMail size='22px' />
                        </div>
                        <div className='social-links'>
                            <a href='https://www.linkedin.com/in/philliplai/' target='_blank'>
                                < BsLinkedin size='36px' />
                            </a>
                            <a href='https://github.com/pdlai' target='_blank'>
                                < BsGithub size='36px' />
                            </a>
                            <a href='https://angel.co/u/phillip-lai-1' target='_blank'>
                                < FaAngellist size='36px' />
                            </a>
                        </div>
                    </div>
                    <ul className='portfolio'>
                        Site
                        <li><a>Portfolio</a></li>
                    </ul>
                    <ul className='technologies'>
                        Technologies
                        <li>Ruby&nbsp;on&nbsp;Rails</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>PostgreSQL</li>
                        <li>JQuery</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <ul className='projects'>
                        Projects
                        <li><a href='https://fetchwell.herokuapp.com/' target='_blank'>Fetchwell</a></li>
                        <li><a href='https://theftdeflect.herokuapp.com/#/' target='_blank'>Theft&nbsp;Deflect</a></li>
                        <li><a href='https://pdlai.github.io/muse-slash/' target='_blank'>Muse&nbsp;Slash</a></li>
                    </ul>
                    <ul className='contacts'>
                        Contacts
                        <li><a href='https://www.linkedin.com/in/philliplai/' target='_blank'>Linkedin</a></li>
                        <li><a href='https://github.com/pdlai' target='_blank'>Github</a></li>
                        <li><a href='https://angel.co/u/phillip-lai-1' target='_blank'>AngelList</a></li>
                    </ul>
                </div>

                <div className='legal-stuff-container'>
                    <ul className='legal-stuff'>
                        <li>Terms Stuff</li>
                        <li>Privacy Stuff</li>
                        <li>Transparency Stuff</li>
                        <li>Pls do not sell my data</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer;