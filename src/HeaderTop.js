import React from 'react';
import {Widget} from './Widget'
export function HeaderTop() {
    return (
        <div className="header-top">
        <div className="container">
            <a href="#">
                <img className="header-logo" src="stat/images/logo.png" />
            </a>
           
            <form className="search-form">
                <input type="text" className="search-input"></input>
                <input type="submit" className="search-button" value=""></input>
            </form>
            <Widget garchig="Улаанбаатар12" utga="27"/>

        </div>
    </div>
    )
}