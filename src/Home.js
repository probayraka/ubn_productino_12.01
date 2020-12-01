import React from 'react';

import {HeaderTop} from './HeaderTop.js'
import {HeaderLarge} from './HeaderLarge.js'
import { BrowserRouter, Link, Switch, Route, useParams } from "react-router-dom";
import {Colleft} from './Colleft.js'
import {Colright} from './Colright.js'

function Home() {
  let { id } = useParams();
  return (
    <div>
            <HeaderTop/>
            <HeaderLarge/>
            <div className='middleSection container'>
              <Colright category={id}/>
              <Colleft/>
            </div>
    </div>
  );
}

export default Home;
