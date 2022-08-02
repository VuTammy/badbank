import React from "react";
// import ReactBootstrap from "react-bootstrap";
// import {Card} from "react-bootstrap";
import Home from "./home";
import CreateAccount from "./createaccount";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";
import NavBar from "./navbar";
// import contextExport from "./context"

// import ReactDOM from "react-dom";
import { Routes, Route, HashRouter } from "react-router-dom";

function Main(){
    return (
        <HashRouter>
            <NavBar/>
                <div className="container" style={{padding: "20px"}}>  
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/createaccount" element={<CreateAccount/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/deposit" element={<Deposit/>} />
                        <Route path="/withdraw" element={<Withdraw/>} />
                        <Route path="/alldata" element={<AllData/>} />
                    </Routes>
                </div>
        </HashRouter>
    );
  }

export default Main;