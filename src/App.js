import React, {useState} from 'react';
import { BrowserRouter, Link, Switch, Route, useParams } from "react-router-dom";

import {Admin} from './Admin'
import {Dashboard} from './Dashboard'
// import Login from './Login'
import Home from './Home'
import Login from './Login'

function App() {
  
const [hereglegch, setHereglegch] = useState({});

  
  return (
    <BrowserRouter>
    {/* <Link to="/admin"> Админ хуудас    </Link>
  <Link to="/home">   Нүүр хуудас       </Link> */}

    <Switch>
      <Route exact path="/dash">
        <Dashboard />
      </Route>
      <Route path="/admin"><Admin user={hereglegch} /></Route>
      <Route path="/login"><Login setHereglegch={setHereglegch}/>
      </Route>
      {/* <Route path="/login">
        <Login setUser={setUser} />
      </Route> */}
      <Route path="/:id" children={<App />}/>
      <Route path="/" exact><Home /></Route>
    </Switch>

  </BrowserRouter>
  );
}

export default App;
