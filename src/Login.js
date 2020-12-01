import React, {useState} from 'react'
import { useHistory, useLocation} from "react-router-dom";

export default function(props){console.log('lognProp', props)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    let history = useHistory(); console.log(history)
  let location = useLocation(); console.log(location)

    function burtguuleh(){ console.log('darag', email, pass)
            let req = new XMLHttpRequest();
            req.open('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD45M3YyfFFAjfjQrgihirerxrlAaDx3jg');
            req.setRequestHeader('Content-Type', 'application/json');
            req.responseType = 'json'
            req.onload = function () {
                console.log('res', req.response);
                props.setHereglegch({
                    email: req.response.email,
                    token: req.response.idToken,
                    id: req.response.localId
                })

                if(location.state) history.push(location.state.from);
                else history.push('')
            }
            req.send(JSON.stringify({email: email, password:pass, returnSecureToken: true}));
    }

    function nevtreh(){ console.log('darag', email, pass)
            let req = new XMLHttpRequest();
                            //   https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD45M3YyfFFAjfjQrgihirerxrlAaDx3jg
            req.open('POST', 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD45M3YyfFFAjfjQrgihirerxrlAaDx3jg');
            req.setRequestHeader('Content-Type', 'application/json');
            req.responseType = 'json'
            req.onload = function () {
                console.log('res', req.response);
                props.setHereglegch({
                    email: req.response.email,
                    token: req.response.idToken,
                    id: req.response.localId
                })

                if(location.state) history.push(location.state.from);
                else history.push('')
            }
            req.send(JSON.stringify({email: email, password:pass, returnSecureToken: true}));
    }

    return (

        <div className="form-signin">
        <img src='./stat/images/lock.png'/>
        <h1>Бүртгүүлэх/Нэвтрэх</h1>
        <input type="email" className="form-control" placeholder="E-Mail хаяг" required autoFocus onChange={ (e)=> setEmail(e.target.value)} value={email}/>
        <input type="password" className="form-control" placeholder="Нууц үг" required onChange={ (e)=> setPass(e.target.value)} value={pass}/>
        <button  className="loginBtn" onClick={burtguuleh}>Бүртгүүлэх</button>
        <button  className="loginBtn"  onClick={nevtreh}>Нэвтрэх</button>
    </div>
    )
}