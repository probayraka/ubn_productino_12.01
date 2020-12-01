import React, { useEffect, useState } from "react";

export default function () {
  const [hereg, setHereg] = useState([]);

  const [em, setEm] = useState();
  const [nr, setNr] = useState();
  const [ns, setNs] = useState();
  const [id, setId] = useState();

  function tableToinput(em, nr, ns, id) {
    console.log(em, nr, ns, id);
    setEm(em);
    setNr(nr);
    setNs(ns);
    setId(id);
  }

  function zasah() {
    console.log(em, nr, ns);
    let req = new XMLHttpRequest();
    req.open("PUT", "https://myproj-f08a3.firebaseio.com/hereglegch/" + id + ".json");
    req.setRequestHeader("Content-Type", "application/json");
    req.responseType = "json";
    req.onload = function () {
      console.log("res", req.response);
      getData();
    };
    req.send(
      JSON.stringify({
        email: em,
        ner: nr,
        nas: ns,
      })
    );
  }

  function haih() {
    console.log(em, nr, ns);
    let req = new XMLHttpRequest();
    req.open("GET", "https://myproj-f08a3.firebaseio.com/hereglegch.json?orderBy=%22nas%22&equalTo=" + ns);
    // req.setRequestHeader('Content-Type', 'application/json');
    req.responseType = "json";
    req.onload = function () {
      console.log("res", req.response);
      refreshTable(req);
    };
    req.send();
  }

  function hadgalah() {
    console.log(em, nr, ns);
    let req = new XMLHttpRequest();
    req.open("POST", "https://myproj-f08a3.firebaseio.com/hereglegch.json");
    req.setRequestHeader("Content-Type", "application/json");
    req.responseType = "json";
    req.onload = function () {
      console.log("res", req.response);
      getData();
    };
    req.send(
      JSON.stringify({
        email: em,
        ner: nr,
        nas: ns,
      })
    );
  }

  function ustgah() {
    console.log(em, nr, ns);
    let req = new XMLHttpRequest();
    req.open("DELETE", "https://myproj-f08a3.firebaseio.com/hereglegch/" + id + ".json");
    // req.setRequestHeader('Content-Type', 'application/json');
    req.responseType = "json";
    req.onload = function () {
      console.log("res", req.response);
      getData();
    };
    req.send();
  }

  function refreshTable(req) {
    let temp = [];
    for (let row in req.response) {
      // console.log(row)
      // console.log(req.response[row].email)
      temp.push(
        <tr>
          <td>{req.response[row].email}</td>
          <td>{req.response[row].ner}</td>
          <td>{req.response[row].nas}</td>
          <td>
            <input
              type="button"
              value="Засах"
              onClick={() => {
                tableToinput(
                  req.response[row].email,
                  req.response[row].ner,
                  req.response[row].nas,
                  row
                );
              }}
            />
          </td>
        </tr>
      );
    }
    setHereg(temp);
  }

  function getData() {
    let req = new XMLHttpRequest();
    req.open("GET", "https://myproj-f08a3.firebaseio.com/hereglegch.json");
    req.responseType = "json";
    req.onload = function () {
      console.log(req.response);
      refreshTable(req);
    };
    req.send();
  }
  useEffect(() => {
    getData();
  }, []);

  let user = []
  return (
    <div>
        <h2 className="garchig">Хэрэглэгчийн бүртгэлийн цонх</h2>
        <input type="text" value={em} onChange={e => { setEm(e.target.value) }} placeholder="Email"></input>
        <input type="text" value={nr} onChange={e => { setNr(e.target.value) }} placeholder="Ner"></input>
        <input type="text" value={ns} onChange={e => { setNs(e.target.value) }} placeholder="Nas"></input>
        <input type="button" value="Засах" onClick={zasah} />
        <input type="button" value="Устгах" onClick={ustgah} />
        <input type="button" value="Хадгалах" onClick={hadgalah} />
        <input type="button" value="Хайх" onClick={haih} />
        <table className="usertable" border="1">
            <thead>
            <tr>
                <th>Email</th>
                <th>Нэр</th>
                <th>Нас</th>
                <th>Үйлдэл</th>
            </tr>
            </thead>
            <tbody>{hereg}</tbody>
        </table>
    </div>
  );
}
