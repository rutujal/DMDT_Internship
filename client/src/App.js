
import Home from "./pages/home/home";
import PDF from "../src/components/PDF/print"
import Write from "./pages/write/Write";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {useContext} from "react";
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context);
  return (
    <Router>
    z
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/register"> <Register/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/write"> <Write/></Route> 
        <Route path="/pdf"><PDF/></Route> 
        

    </Switch>
    
    
    
    </Router>
  );
}

export default App;
