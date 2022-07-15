import React from 'react';
import IMGheader from './IMGheader';
import Gifheader from '../asset/header.gif';
import Bandeau from './bandeau';
import DivHeader1 from './divHeader1';

class Header extends React.Component{

    render(){

        return <header><IMGheader src ={Gifheader}/><Bandeau /><DivHeader1 /></header>;

    }

}

export default Header;