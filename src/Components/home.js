import React from "react";
import contextExport from "./context";
import bank from "../bank.png";

function Home(){
    return (
        <contextExport.Card
            bgcolor="light"
            txtcolor="Black"
            cardWidth='40%'
            header="Bad Bank Homepage"
            title="Welcome to the bank"
            text="Please create an account or login to begin."
            body={(<img src={bank} className="img-fluid"
            alt="Responsive image"/>)}
        />
    );
}

export default Home;