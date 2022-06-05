import Home from "./pages/home/home";
import PDF from "../src/components/PDF/print"
import Write from "./pages/write/Write";
import Write2 from "./pages/write2/write2"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Certificate1 from "./pages/Cetificate1/Certificate1";
import Form21 from "./pages/Form21/Form21"
import Form1 from "./pages/edu1/form1";
import Form2 from "./pages/edu2/form2";
import Form3 from "./pages/ele1/form3";
import Form4 from "./pages/ele2/form4";
import Form6 from "./pages/serv/form6";
import Write1 from "./pages/write1/Write1";
import Write3 from "./pages/write3/Write3";
import Certificate2 from "./pages/certificate2/Certificate2";
import Age from "./pages/Age/Age";
import Form7 from "./pages/NF1/form7";
import Form8 from "./pages/Form8/form8";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {useContext} from "react";
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
    
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/register"> <Register/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/write"> <Write/></Route> 
        <Route path="/pdf"><PDF/></Route> 
        <Route path="/write2"> <Write2/></Route> 
        <Route path="/cert1"> <Certificate1/></Route> 
        <Route path="/form21"> <Form21/></Route>
        <Route path="/write1"> <Write1/></Route> 
        <Route path="/write3"> <Write3/></Route> 
        <Route path="/cert2"> <Certificate2/></Route>
        <Route path="/form1"> <Form1/></Route>  
        <Route path="/form2"> <Form2/></Route>  
        <Route path="/form3"> <Form3/></Route> 
        <Route path="/form4"> <Form4/></Route> 
        <Route path="/form6"> <Form6/></Route>
        <Route path="/age"><Age/></Route>
        <Route path="/form7"><Form7/></Route>
        <Route path="/form8"><Form8/></Route>
    </Switch>
    
    
    </Router>
  );
}

export default App;
