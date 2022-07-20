function AllData() {
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext);

  function CreateData() {
    var table = document.getElementById("table");
    for (let i = 0; i < createName.length; i++) {
      var row = table.insertRow(1);
      var nameData = row.insertCell(0);
      var emailData = row.insertCell(1);
      var passwordData = row.insertCell(2);
      nameData.innerHTML = createName[i];
      emailData.innerHTML = createEmail[i];
      passwordData.innerHTML = createPassword[i];
    }
    setShow(true);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="Black"
      header="All Data"
      cardWidth='100%'
      body={
        show ? (
          <>
            <table className="table" id="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
            
              </tbody>
              <button type="submit" className="btn btn-danger" onClick={CreateData}>Show Data</button>
            </table>
          </>
        ) : (
          <></>
        )
      }
    />
  );
}
