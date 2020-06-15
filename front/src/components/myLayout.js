import React from 'react';
import Header from './myHeader';
import Footer from './myFooter';
import "../styles/components/Layout.scss"
function Layout(props) {
    return (
        <div className="layout">
            <Header/>
            {props.children}
            <Footer/>
        </div>
      );
}

export default Layout