import React from "react";

var bal = 100;

function UpdateBalance(number){
    bal = number;
    console.log(bal);
}

function ReturnBalance(){
    return bal;
}

const balanceExport = {
    UpdateBalance,
    ReturnBalance,
}

export default balanceExport;