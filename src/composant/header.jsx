import React from 'react';
import IMGheader from './IMGheader';
import Gifheader from '../asset/header.gif';

class Header extends React.Component{

    render(){

        return <header><IMGheader src ={Gifheader}/></header>;

    }

}

export default Header;