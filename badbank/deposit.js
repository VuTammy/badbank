function Deposit(){
    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState('');
    const [amount, setAmount]      = React.useState('');
    var [balance, setBalance]      = React.useState(ReturnBalance);
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if (!field || amount < 0) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        if (!validate(amount, 'Not a valid input.'))   return;
        balance = balance + parseInt(amount);
        setBalance(balance);
        ctx.users.push({amount,balance});
        setShow(false);
        UpdateBalance(balance);
    }

    function clearForm(){
        setAmount('');
        setShow(true);
    }


    return(
        <Card
            bgcolor="light"
            txtcolor="Black"
            header="Deposit"
            cardWidth='30%'
            status={status}
            body={show ? (
                <>
                <em><b>Balance : ${balance}</b></em> <br/>
                <br/>
                Deposit Amount<br/>
                <br/>
                <input type="number" className="form-control" id="amount" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-danger" onClick={handleCreate}>Deposit</button>
                </>
            ):(
                <>
                <h5>Deposit successful<br/>
                <br/>
                <em><b>Balance : ${balance}</b></em> </h5>
                <br/>
                <button type="submit" className="btn btn-danger" onClick={clearForm}>Add Another Deposit</button>
                </>
            )}
        />
    );
}