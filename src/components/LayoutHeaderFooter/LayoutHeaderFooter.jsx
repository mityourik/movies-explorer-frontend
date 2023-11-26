import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

function LayoutHeaderFooter({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

LayoutHeaderFooter.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutHeaderFooter;