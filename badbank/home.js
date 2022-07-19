function Home(){
    return (
        <Card
            bgcolor="white"
            txtcolor="Black"
            header="BadBank Landing Page"
            title="Welcome to the bank"
            text="Please create an account or login to begin."
            body={(<img src="bank.png" className="img-fluid"
            alt="Responsive image"/>)}
        />
    );
}