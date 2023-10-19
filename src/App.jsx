import { Routes, Route } from "react-router-dom"
import Form from "./pages/Form";
// import Authentication from './components/Authentication'
import TalentForm  from './pages/TalentForm'
// import CreateAccount  from './components/CreateAccount'
import VerifyAlert from './pages/VerifyAlert'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<TalentForm/>}/>
          {/* <Route path="/verifyAcc" element={<VerifyAcc/>}/> */}
          <Route path="/verifyAlert" element={<VerifyAlert/>}/>
          <Route path="/form" element={ <Form />}/>
        </Routes>
    </div>
  );
}

export default App;