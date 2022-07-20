function Home(){
    return (
        <Card
            bgcolor="light"
            txtcolor="Black"
            cardWidth='40%'
            header="Bad Bank Homepage"
            title="Welcome to the bank"
            text="Please create an account or login to begin."
            body={(<img src="bank.png" className="img-fluid"
            alt="Responsive image"/>)}
        />
    );
}