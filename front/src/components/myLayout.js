import React from 'react';
import Header from './myHeader';
import Footer from './myFooter';

function Layout(props) {
    return (
        <div >
            <Header/>
            {props.children}
            <Footer/>
        </div>
      );
}

export default Layout