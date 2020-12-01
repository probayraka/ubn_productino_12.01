import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import React, {useState} from 'react';
export function HeaderLarge(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

        // let req = new XMLHttpRequest();
        // req.open('POST', 'https://myproj-f08a3.firebaseio.com/tses.json');
        // req.setRequestHeader('Content-Type', 'application/json');
        // req.onload = function () {
        //     console.log('res', req.response);
        // };
        // // req.send(JSON.stringify({tsesElement: 'Нийгэм'}));
        // req.send(JSON.stringify({imageSrc: './stat/images/icon_corona.png'}));

        if(loading) {
            let req = new XMLHttpRequest();
            req.open('GET', 'https://myproj-f08a3.firebaseio.com/tses.json');
            req.responseType = "json";
            req.onload = function () {
                let res= req.response; console.log('res' , res);
                setLoading(false);
                let d = []; 
                for (const property in res) {
                    // console.log(`${property}: ${ res[property].menuItem }`);
                    if(res[property].tsesElement){console.log(res[property].tsesElement);
                        d.push(<li key={property}> <Link to="/aaa">{res[property].tsesElement}</Link></li>);
                    } else if(res[property].imageSrc){
                        console.log(res[property].imageSrc);
                        if(res[property].orgon){
                            d.push(<li key={property}> <Link to="/asd"><img style={{ width: res[property].orgon + 'px'  }} src={res[property].imageSrc}/></Link></li>);
                        }
                        else d.push(<li key={property}> <Link to="/ttt"><img src={res[property].imageSrc}/></Link></li>);
                    } 
                  }//console.dir(d);
                 setData(d);
            };
            req.send();
        }   


    return(
        <div className="header-large">
            <div className="container">
                <ul>
                    {data}
                    {/* <li><a href="/">Ubn</a></li>
                    <li><a href="/c/3">Нийгэм</a></li>
                    <li><a href="/c/1">Улс төр</a></li>
                    <li><a href="/">Эдийн засаг</a></li>
                    <li className="active"><a href="/">Дэлхий дахинд</a></li>
                    <li><a href="/">Facelook</a></li>
                    <li><a href="/">Мэдээллийн боловсрол</a></li> */}
                </ul>
            </div>
        </div>
    )
}