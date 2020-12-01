import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import User from './User'

export function Admin(props) {
  // if (props.user && props.user.token)
  return (
    <div>
      <nav className="topnav">
        <a className="brandner" href="#">
          UBN
        </a>
      </nav>
      <div>
        <nav className="sidebartses">
          <ul>
            <li><Link to="/admin/user" className="active">Хэрэглэгч</Link></li>
            <li><Link to="/admin/category">Категори</Link></li>
          </ul>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path="/admin/user"><User /></Route>
        </Switch>
      </main>
    </div>
  );
  // else
  // return <Redirect to={{ pathname: "/login", state: { from: "admin" } }} />;
}
