import React from "react";

var createName = [];
var createEmail = [];
var createPassword = [];

function UpdateData(x, y, z){
    createName.push(x);
    createEmail.push(y);
    createPassword.push(z);
}

export default UpdateData;