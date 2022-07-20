function CreateAccount(){
    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState('');
    const [name, setName]          = React.useState('');
    const [email, setEmail]        = React.useState('');
    const [password, setPassword]  = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        console.log(password.length);
        if (!field || password.length < 8) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){

        console.log(name,email,password);
        if (name == ""){
            if (!validate(name,   'Please enter name.'))         return;
        }

        if (email == ""){
            if (!validate(email,   'Please enter email.'))       return;
        }
        if (password.length < 8){
            if (!validate(password,   'Not a valid password. Must have 8 or more characters.')) return;
        }
        ctx.users.push({name,email,password,balance:100});
        UpdateData(name, email, password);
        setShow(false);
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return(
        <Card
            bgcolor="light"
            txtcolor="Black"
            header="Create Account"
            cardWidth='30%'
            status={status}
            body={show ? (
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" id="button-id" className="btn btn-danger" onClick={handleCreate}>Create Account</button>
                </>
            ):(
                <>
                <h5>Account Created. Welcome to the bank!</h5>
                <button type="submit" className="btn btn-danger" onClick={clearForm}>Add another account</button>
                </>
            )}
        />
    );
}