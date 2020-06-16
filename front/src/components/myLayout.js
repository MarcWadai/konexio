import React from 'react';
import Header from './myHeader';
import Footer from './myFooter';
import { Alert } from 'antd';
import "../styles/components/Layout.scss"
function Layout(props) {
    return (
        <div className="layout">
            <Header/>
            {(props.error) ?  <Alert message="An error occured" type="error" /> : null}
            {props.children}
            <Footer/>
        </div>
      );
}

export default Layout