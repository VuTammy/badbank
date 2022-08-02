import './App.css';
import Main from "./Components/Main";
import contextExport from "./Components/context";


function App() {
  return (
    <>
    <contextExport.UserContext.Provider value={{users:[{name:'Tammy',email:'tammy@mit.edu',password:'secret',balance:100}]}}>
    <Main />
    </contextExport.UserContext.Provider>
    </>
  );
}

export default App;
