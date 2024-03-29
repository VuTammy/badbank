import React from "react";
import contextExport from "./context";
import balanceExport from "./updatebalance";

function Login(){
    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState('');
    const [email, setEmail]        = React.useState('');
    const [password, setPassword]  = React.useState('');
    const ctx = React.useContext(contextExport.UserContext);

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(email,password);
        if (!validate(email,    'email'))      return;
        if (!validate(password, 'password'))   return;
        ctx.users.push({email,password,balance:100});
        balanceExport.UpdateData(" ", email, password);
        setShow(false);
    }

    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return(
        <contextExport.Card
            bgcolor="light"
            txtcolor="Black"
            header="Login"
            cardWidth='30%'
            status={status}
            body={show ? (
                <>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-danger" onClick={handleCreate}>Login</button>
                </>
            ):(
                <>
                <h5>Welcome back! Use the Navigation bar to get started.</h5>
                <button type="submit" className="btn btn-danger" onClick={clearForm}>Log Out</button>
                </>
            )}
        />
    );
}

export default Login;