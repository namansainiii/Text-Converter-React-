import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import About from './components/About';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
const [alert,setAlert]=useState(null);

  const showalert = (message,type) => {
    setAlert({
      msg:message,
    type:type
    })
    setTimeout(()=>{
setAlert(null);
    },1500);
    
  }



const [mode,setMode]=useState('light');  
  const toggle=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background='#0E2046';
      showalert("DARK MODE ENABLED","SUCCESS!");
      document.title='dark mode';
      setInterval(()=>{
        document.title='Converter is Amazing ';
      },2000);
      setInterval(()=>{
        document.title='Install Converter now';
      },1500);
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showalert("LIGHT MODE ENABLED","SUCCESS!");
      document.title='light mode'
      setInterval(()=>{
        document.title='Converter is Amazing ';
      },2000);
      setInterval(()=>{
        document.title='Install Converter now';
      },1500);
    }
  }




  return (
    //text ko change karenge without loading the page
    <>
<Router>
    <Navbar title="CONVERTER" mode={mode} toggle={toggle} />
    <Alert alert={alert} /> 
    <div className="container my-3">

      <Switch>
        <Route exact path="/about">
           <About/>
        </Route>
        <Route exact path="/">
          <Textarea mode={mode} showalert={showalert}/>   
          </Route>
      </Switch>
        
      
    </div>

</Router>
    </>
  );
}

export default App;
