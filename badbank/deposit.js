function Deposit(){
    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState('');
    const [amount, setAmount]      = React.useState('');
    var x= 100;
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(amount);
        if (!validate(amount, 'amount'))   return;
        ctx.users.push({amount,balance:100});
        setShow(false);
    }

    function clearForm(){
        setAmount('');
        setShow(true);
    }

    return(
        <Card
            bgcolor="success"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                Balance : ${x} <br/>
                Deposit Amount<br/>
                <input type="input" className="form-control" id="amount" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
                </>
            ):(
                <>
                <h5>Deposit successful</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit more money</button>
                </>
            )}
        />
    );
}