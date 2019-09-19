import React from 'react';
import PropTypes from 'prop-types'


const Header = ({title}) => (  
    <header className='text-center'>
        <h1>
            {title}
        </h1>
        <p>Web application for the creation and management of appointments in a veterinary.<br/>Fill out the form and view the agenda.</p>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header;