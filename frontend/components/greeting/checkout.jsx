import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

class CheckOutPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        window.scrollTo(0,0);
        return (
            <div className='checkout-page'>
                <div className='order-placed-message'>Your order has been placed!</div>
                <div>Thank you for checking out my website.</div>
                <div>Feel free to check out my links to see other projects.</div>
                <div className='social-links'>
                    <a href='https://www.linkedin.com/in/philliplai/' target='_blank'>
                        < BsLinkedin size='42px' />
                    </a>
                    <a href='https://github.com/pdlai' target='_blank'>
                        < BsGithub size='42px' />
                    </a>
                    <a href='https://angel.co/u/phillip-lai-1' target='_blank'>
                        < FaAngellist size='42px' />
                    </a>
                </div>
            </div>
        )
    }
}

export default CheckOutPage;